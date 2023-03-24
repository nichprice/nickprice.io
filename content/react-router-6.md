---
title: React Router 6
date: 2022-08-25
---

Even though it may not seem like it, **_things get better over time_**. There may be times that it feels like the world around us is crumbling, that the state of society is degrading, and that the end is imminent. I promise you this, **_it isn't_**.

Believe it or not, humans really like problems and are very good at solving them. Progress is imminent. Look around you and ask questions about how things came to be. You’ll soon realize your entire existence is the result of millenia of human progress.

Enter: react router 6.

During my software engineering bootcamp we were taught React Router 5. I didn’t understand it. I didn’t want to understand it because I found it unintuitive. I learned what I needed to learn about it in oder to pass, and then I dropped it like a bad habit. When I began working on my final project, which provided me carte blanche on all decisions, I immediately dedicated some time toward learning react router 6.

Worth it!

[This video](https://www.youtube.com/watch?v=UjHT_NKR_gU) taught me all I needed to know, and I highly recommend you check it out.

Here are some examples of what you can do and how:

1.  BrowserRouter

        <BrowserRouter>
            <nav>
                <span>
                    <Link to ="/"> Home </Link>
                    <Link to ="/episodes"> Episodes </Link>
                    <Link to ="/races"> Race </Link>
                </span>
            </nav>
            <Routes>
                <Route path="/episodes" element={<Episodes/>}/>
                <Route path="/episodes/:id" element={<EpisodePage/>}/>
                <Route path="/races" element={<Races/>}/>
                <Route path="/races/:id" element={<RacePage>}/>
                <Route path="*" element={<ErrorPage>}/>
            </Routes>
        <BrowserRouter>

Here you see a BrowserRouter tage wrapping up my entire app. Let’s start with the Routes. The routes show what components you’re routed to and what URL to assign to that route. A very simple and more intuitive approach to routing than the React Router 5 predessor.

What I love most is that you dedicate the element that corresponds with the Route. Very simply, the element is a component. You now have a webpage that corresponds to your component.

Above the Routes, you see a nav. Here’s where users interface with the DOM and get sent routed to the webapps webpages. Click on the Episodes link and you’ll be routed to the website’s /episodes URL.

2.  useNavigate

        import { useNavigate } from "react-router-dom"

        function EpisodeCard({ episode }) {

            let navigate = useNavigate();

            return (

                <div onClick={() => navigate(`/episodes/${episode.id}`)}>
                    <img src={episode.insta_pic}/>
                    <p>{episode.blurb}</p>
                </div>

            )
        };

Here we see useNavigate in action.

We’re using prop called “episode” that has unique id. We’re also using a div that when clicked, runs the useNavigate function that we defined as the constant “navigate” just above the return.

When we click on the div, the use navigate takes a to the declared URL, which in this case is “/episodes/${episode.id}”

3. useParams

Which leads us into useParams. You params can be very useful. Here we are plucking that id that we just defined in the useNavigate section. The issue was that the episode wasn’t accessible to this component the way it was for the last component. Rather that finagling a complicated fetch request to get the episode and then it’s id, we can pluck the id number from the URL of the page we’re on!

For instance, say we’re routed to episode id 3’s web page. We click on episode with the id 3 and then we land on the URL “/episodes/3”.

When we do useParams, the function is plucking the “3” from our URL and then it’s plugged in anywhere we use the constant “id”. Which in this case, is on the last line of code.

That’s it!

Quick, easy, and intuitive. I love this version of react router and I think you will too! If you have any questions or if there’s anything you’d like to debug together, I’m always glad to help out!

Happy coding!
