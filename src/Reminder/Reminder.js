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
    const {presets, handleOpen, onItemClick} = props

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

        // setData(oldData)

        return oldData;
    }


    const sortPresetsByTime = (normalizedPresets) => {
        const newData = [...normalizedPresets];

        for (let i = 0; i < newData.length; i++) {
            // newData[i].items.sort((a, b) => a.startTime - b.startTime)
            // newData[i].items.sort((a, b) => b.startTime - a.startTime)
            // newData[i].items.sort((a, b) => {
            //     console.log('A Val: ', a);
            //     console.log('B val: ', b);
            //     const [hourA, minutesA] = a.startTime.split(':');
            //     const [hourB, minutesB] = b.startTime.split(':')

            //     const dateA = new Date ()
            //     const dateB = new Date ();

            //     const stampA = dateA.setHours(hourA, minutesA, 0);
            //     const stampB = dateB.setHours(hourB, minutesB, 0);

            //     return stampB - stampA 
            // })


            newData[i].items.sort((a, b) => {
                const [hourA, minutesA] = a.startTime.split(':');
                const [hourB, minutesB] = b.startTime.split(':')


                if (Number(hourA) > Number(hourB)) {
                    return 1
                }
                if (Number(hourA) < Number(hourB)) {
                    return -1
                }

                if (Number(minutesA) > Number(minutesB)) {
                    return 1
                }

                if (Number(minutesA) < Number(minutesB)) {
                    return -1
                }

                return 0;
            })
        }

        return newData;
    }

    const normalizeTime = (sortedPresets) => {
        const newData = [...sortedPresets];

        for (let i = 0; i < newData.length; i++) {
            for (let j = 0; j < newData[i].items.length; j++) {

                if (newData[i].items[j].startTime.includes('P.M') || newData[i].items[j].startTime.includes('A.M')) {
                    continue;
                }
                let time = newData[i].items[j].startTime;
                
                
                
                time = time.split(':')

                let hours = Number(time[0]);
                let minutes = Number(time[1]);          
            
                let timeValue;

                if (hours > 0 && hours <= 12) {
                    timeValue= "0" + hours;
                  } else if (hours > 12) {
                    timeValue= "" + (hours - 12);
                  } else if (hours == 0) {
                    timeValue= "12";
                  }

                timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
                timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

                newData[i].items[j].startTime = timeValue;
            }
        }

        return newData;
    }


    const handleRightButtonClick = () => {
        handleOpen()
    }

    useEffect(() => {
        const normalizedPresets = normalizeData()

        const sortedPresets = sortPresetsByTime(normalizedPresets);

        // const normalizedTimePresets = normalizeTime(sortedPresets);
        setData(sortedPresets)

    }, [presets])

    return (
        <div>
            <ReminderCalendar

            shadow={true}
            dateSections={data}
            onItemClick={onItemClick}
            onDateSectionRightButtonClick={handleRightButtonClick}
        />
        </div>
    )
}