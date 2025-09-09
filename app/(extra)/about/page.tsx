export const metadata = {
    title: 'About',
    description: 'about related desc.. goes here...',
  }
const About=()=>{
    console.log("before return from About");
    return(
        <>
            <h2>About</h2>
            <p>
                Some text for About goes here
            </p>
        </>
    );
}
export default About;