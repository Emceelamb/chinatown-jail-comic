import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Sources = () => {
    return (
        <div className="w-2/5 mx-auto h-full m-48">
            <div className="flex flex-row items-baseline mb-12">
                <p className="font-bold text-lg mr-8">Credits</p>
                <p className="text-left text-lg leading-none">Design and writing by <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://winnieyoe.com/" >Winnie Yoe</a>. Development by <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://markofthelam.com/">Mark Lam</a>. Thank you to all interviewees and advisors for their generous time and thoughtful contribution.</p>
            </div>

            <div className="flex flex-row items-baseline">
                <div>
                    <p className="font-bold text-lg mr-8">Sources</p>
                </div>

                <div className="">
                    <div className="mb-8">
                        <p className="text-left font-bold text-lg leading-none mb-2">General</p>

                        <p className="text-left text-lg leading-none mb-4">Yang, Stephanie (2020, May 7). New York’s Chinatown businesses struggle to survive coronavirus shutdown. The Wall Street Journal. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.wsj.com/articles/new-yorks-chinatown-businesses-struggle-to-survive-coronavirus-shutdown-11588856400">https://www.wsj.com/articles/new-yorks-chinatown-businesses-struggle-to-survive-coronavirus-shutdown-11588856400</a></p>

                        <p className="text-left text-lg leading-none mb-4">Knowles, H., &amp; Bellware, K. (2020, May 16). Fear sent her Chinatown restaurant spiraling. the challenges to reopening feel 'just impossible.’. The Washington Post. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.washingtonpost.com/nation/2020/05/16/asian-american-business-coronavirus/">https://www.washingtonpost.com/nation/2020/05/16/asian-american-business-coronavirus/</a></p>

                        <p className="text-left text-lg leading-none mb-4">Rong, XiaoQing(2021, September 22). Chinatown Street has been closed since 9/11, and residents are fed up. Documented. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://documentedny.com/2021/09/10/this-chinatown-street-has-been-shut-down-since-9-11-and-residents-are-fed-up/">https://documentedny.com/2021/09/10/this-chinatown-street-has-been-shut-down-since-9-11-and-residents-are-fed-up/</a></p>

                        <p className="text-left text-lg leading-none mb-4">City of New York. (2022, February 18). NYC borough-based jails<a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://rikers.cityofnewyork.us/nyc-borough-based-jails/">https://rikers.cityofnewyork.us/nyc-borough-based-jails/</a></p>
                    </div>

                    <div className="mb-8">
                        <p className="text-left font-bold text-lg leading-none mb-2">In Jan Lee’s section</p>
                        <p className="text-left text-lg leading-none mb-4">Shenon, Philip. (1983, Oct. 17). <a className="underline decoration-dotted" target="_blank" rel="noreferrer" href="https://www.nytimes.com/1983/10/17/nyregion/tombs-to-reopen-with-a-new-look.html">Tombs to reopen with a new look.</a> The New York Times.
                        </p>

                        <p className="text-left text-lg leading-none mb-4">@nubnyc. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.instagram.com/nubcnyc/">https://www.instagram.com/nubcnyc/</a></p>

                    </div>

                    <div className="mb-8">
                        <p className="text-left font-bold text-lg leading-none mb-2">In Karlin Chan’s section</p>
                        <p className="text-left text-lg leading-none mb-4">Chao, Evelyn. (2021, April 1). The Chinatown Block Watch, one year later. Curbed. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.curbed.com/2021/04/chinatown-block-watch-one-year-later.html">https://www.curbed.com/2021/04/chinatown-block-watch-one-year-later.html</a></p>

                        <p className="text-left text-lg leading-none mb-4">McDonough, Annie, &amp; Rahaman, Maryam. (2021, July 6). 2021 New York City Council Primary Election Results. City &amp; State NY.<a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.cityandstateny.com/politics/2021/06/2021-new-york-city-council-primary-election-results/182745/">https://www.cityandstateny.com/politics/2021/06/2021-new-york-city-council-primary-election-results/182745/</a></p>
                    </div>

                    <div className="mb-16">
                        <p className="text-left font-bold text-lg leading-none mb-2">In Anonymous’s section</p>
                        <p className="text-left text-lg leading-none mb-4">Dugyala, Rishika (2021, October 3). What's mobilizing AAPI voters like never before. POLITICO. <a className="underline decoration-dotted decoration-1" target="_blank" rel="noreferrer" href="https://www.politico.com/newsletters/the-recast/2021/10/03/poll-asian-american-pacific-islander-voters-politics-fear-494533">https://www.politico.com/newsletters/the-recast/2021/10/03/poll-asian-american-pacific-islander-voters-politics-fear-494533</a></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export { Sources };