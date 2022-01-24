import React, {useState, useEffect} from 'react';

const post = [{
    'id': 1,
    'title': 'Good tea',
    'price': 10,
    'count': 13
},
    {
        'id': 2,
        'title': 'Good coffee',
        'price': 15,
        'count': 31
    },
    {
        'id': 3,
        'title': 'Goffod coffee',
        'price': 27,
        'count': 2
    }


    ];

const App = () => {


    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('');
    useEffect(() => {
        const sortArray = type => {
            const types = {
                price: 'price',
                count: 'count',
            };
            const sortProperty = types[type];
            const sorted = [...post].sort((a, b) => b[sortProperty] - a[sortProperty]);
            console.log(sorted);
            setData(sorted);
        };
        sortArray(sortType);
    }, [sortType]);


    return (
        <>
            <div>
                <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="price">По цене</option>
                    <option value="count">По количеству</option>
                </select>
            </div>
            <div>
                {data.map((i) => (
                    <div key={i.id} style={{margin: '30px'}}>
                        <div>{`title: ${i.title}`}</div>
                        <div>{`price: ${i.price}`}</div>
                        <div>{`count: ${i.count}`}</div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default App;








