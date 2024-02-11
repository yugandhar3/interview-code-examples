import React, { useState } from 'react'

function ListSwap() {
    const [list1, setList1] = useState([
        { id: 1, title: "item1", checked: false },
        { id: 2, title: "item2", checked: false },
        { id: 3, title: "item3", checked: false }
    ])
    const [list2, setList2] = useState([
        { id: 1, title: "itemA", checked: false },
        { id: 2, title: "itemB", checked: false },
        { id: 3, title: "itemC", checked: false }
    ])
    const handleChangeCheckBox = (idx) => {
        const updatedList1 = [...list1];
        updatedList1[idx].checked = !updatedList1[idx].checked;
        setList1(updatedList1);

    }
    const handleSwape = () => {
        const updatedList1 = [...list1];
        const updatedList2 = [...list2];

        updatedList1.forEach((item, idx) => {
            if (item.checked) {
                const temp = updatedList1[idx].title;
                updatedList1[idx].title = updatedList2[idx].title;
                updatedList2[idx].title = temp
            }
            updatedList1[idx].checked = false

        })
        setList1(updatedList1)
        setList2(updatedList2)
    }
    return (
        <div>
            List1
            {list1.map((item, idx) =>
                <ul>

                    <li>
                        <input type="checkbox" checked={item.checked} onChange={() => handleChangeCheckBox(idx)} />
                        {item.title}</li>
                </ul>
            )}
            List2
            {list2.map((item) => <ul>
                <li>{item.title}</li>
            </ul>)}

            <button onClick={handleSwape}>swap</button>
        </div>
    )
}

export default ListSwap
