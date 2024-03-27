/* eslint-disable react-hooks/exhaustive-deps */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getReadFromLocalStorage } from '../../utility/localStorage';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={4}  
                textAnchor="end"
                fill="#666" 
                transform="rotate(-45)" 
            >
                {payload.value}
            </text>
        </g>
    );
};


const PagesToRead = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const readData = getReadFromLocalStorage();
        if (readData.length > 0) {
            const bookList = [];
            for (const id of readData) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    bookList.push(book);
                }
            }
            setReadBooks(bookList);
        }
    }, []);

    return (
        <div className='bg-[#13131308] my-24 min-h-screen text-center items-center pt-28'>
        <ResponsiveContainer width="100%" height={600}>
            <BarChart
                data={readBooks}
                margin={{
                    top: 50,
                    right: 60,
                    left: 100,
                    bottom: 150,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                dataKey="bookName"
                interval={0}  
                angle={-45}  
                textAnchor="end"  
                tickLine={false}  
                tick={<CustomizedAxisTick />}
                
                />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>

        </div>
    );
};

export default PagesToRead;
