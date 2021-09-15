
import home from '../../images/home.png'
import library from '../../images/library.png'
import schedule from '../../images/schedule.png'
import grades from '../../images/grades.png'
import settings from '../../images/settings.png'
import tasks from '../../images/tasks.png'

const navbarList =[
    {
        title: "Home",
        url: "/home",
        icon: `${home}`
    },
    {
        title: "Tasks",
        url: "/tasks",
        icon: `${tasks}`
    },
    {
        title: "Schedule",
        url: "/schedule",
        icon: `${schedule}`
    },
    {
        title: "Library",
        url: "/library",
        icon: `${library}`
    },
    {
        title: "Grades",
        url: "/grades",
        icon: `${grades}`
    },
    {
        title: "Settings",
        url: "/settings",
        icon: `${settings}`
    }
]

export default navbarList

