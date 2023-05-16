
import Feed from "@components/Feed";

const Home = () => {
    return(
        //Use Tailwind CSS by selecting className
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover & Share
            <br className="max-md:hidden"/>
            <span className="blue_gradient text-center">Prompto AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Prompto is a prompting tool to create and share AI prompts
            </p>
            <br/>
            <Feed />


        </section>
        
    )
}

export default Home;
