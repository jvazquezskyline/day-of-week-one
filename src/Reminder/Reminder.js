import React, { useEffect, useState } from "react"
import ReminderCalendar from "react-reminder-calendar/dist"


// const data = [
//     {
//         title: "Monday",
//         items: [
//             {
//                 title: "Dinner with Richard",
//                 subTitle: "Richards House",
//                 icon: "fa fa-map-pin",
//                 startTime: "12:00",
//                 isAllDay: false,
//                 allDayTitle: "All Day",
//                 separatorColor: "#26bdc6",
//                 style: {},
//                 infoViewComponent: null,
//                 rightViewComponent: null
//             },
//             {
//                 title: "Online meeting",
//                 subTitle: "Zoom",
//                 icon: "",
//                 startTime: "18:00",
//                 endTime: "19:30",
//                 isAllDay: false,
//                 allDayTitle: "All Day",
//                 separatorColor: "#a326c6",
//                 style: {},
//                 infoViewComponent: <div style={{fontSize: 12}}><small><b>Zoom Link</b>  <kbd>https://zoom.us/udyt4RE</kbd></small></div>,
//                 rightViewComponent: null
//             }
//         ],
//         rightButton: {
//             title: "+",
//             show: true,
//             props: {
//                 className: "",
//                 style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22},
//                 onClick: () => {
//                     console.log('HELLO WORLD')
//                 }
//             }
//         }
//     },
//     {
//         title: "TOMORROW, NOV 5",
//         items: [
//             {
//                 title: "Join the Summit",
//                 subTitle: "City Center",
//                 icon: "fa fa-map-pin",
//                 startTime: "10:00",
//                 endTime: "13:00",
//                 isAllDay: true,
//                 allDayTitle: "All Day",
//                 separatorColor: "#69c626",
//                 style: {},
//                 infoViewComponent: null,
//                 rightViewComponent: null
//             },
//             {
//                 title: "Enroll the online course",
//                 subTitle: "Udemy",
//                 icon: "",
//                 startTime: "18:00",
//                 endTime: "19:30",
//                 isAllDay: false,
//                 allDayTitle: "All Day",
//                 separatorColor: "#e5245a",
//                 style: {},
//                 infoViewComponent: null,
//                 rightViewComponent: null
//             }
//         ],
//         rightButton: {
//             title: "+",
//             show: true,
//             props: {
//                 className: "",
//                 style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
//             }
//         }
//     }
// ]





export default function App (props) {

    const [data, setData] = useState([])
    const {presets, handleOpen} = props

    const normalizeData = () => {
        
        let oldData = [    {
            title: 'Monday',
            items: [],
            mapItems: {},
            rightButton: {
                title: "+",
                show: true,
                props: {
                    className: "",
                    style: {backgroundColor: '#ccc', border: 'none', width: 22, height: 22}
                }
            }
        },
        {
            title: 'Tuesday',
            items: [],
            mapItems: {}
        },
        {
            title: 'Wednesday',
            items: [],
            mapItems: {},
        },
        {
            title: 'Thursday',
            items: [],
            mapItems: {},
        },
        {
            title: 'Friday',
            items: [],
            mapItems: {},
        },
        {
            title: 'Saturday',
            items: [],
            mapItems: {},
        },
        {
            title: 'Sunday',
            items: [],
            mapItems: {},
        },
    ]

        for (let i = 0; i < oldData.length; i++) {
            const day = oldData[i].title;
            for (let j = 0; j < presets.length; j++) {


                if (presets[j].days.includes(day) && !oldData[i].mapItems[presets[j].id]) {
                    oldData[i].mapItems[presets[j].id] = presets[j]
                    oldData[i].items.push(presets[j])
                }
            }
        }

        setData(oldData)

        return oldData;
    }


    const sortPresetsByTime = (normalizedPresets) => {
        const newData = [...normalizedPresets];

        for (let i = 0; i < newData.length; i++) {
            newData[i].items.sort((a, b) => a.startTime - b.startTime)
            // newData[i].items.sort((a, b) => b.startTime - a.startTime)

        }
    }

    const handleItemClick = () => {}

    const handleRightButtonClick = () => {
        console.log('HELLO')
        handleOpen()
    }

    useEffect(() => {
        const normalizedPresets = normalizeData()

        sortPresetsByTime(normalizedPresets);
    }, [presets])

    return (
        <div>
            <ReminderCalendar
            shadow
            dateSections={data}
            onItemClick={handleItemClick}
            onDateSectionRightButtonClick={handleRightButtonClick}
        />
        </div>
    )
}