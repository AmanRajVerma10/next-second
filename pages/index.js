import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS=[{
    id:'m1',
    title:'A First Meeting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Some Address 5,1234 Some City',
    decription: 'this is a first meetup'
},
{
    id:'m2',
    title:'A Second Meeting',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Some Address 15,3234 Some City',
    decription: 'this is a second meetup'
}]

function HomePage(){
    return(<MeetupList meetups={DUMMY_MEETUPS}></MeetupList> )
}

export default HomePage;