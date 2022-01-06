import React from 'react'
import {useState, useEffect } from 'react'
import './News.css'
function New() {

    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState([true])
    const [q,setQ] = useState('');

    useEffect(() =>  {
      fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        .then((res) => res.json())
        .then((json) => {
          setIsLoading(false);
          setItems(json.hits);
        })
        .catch(() => console.log("request failed"));
    }, []);

    function newUrl (url) {
        // if (url) return url.substring(8, url.length-1);
        // return url;
        let web = url? url.substring(8, url.length) : '';
        let l =  web.indexOf("/");
        if(l !== -1)
        {
          l = web.indexOf("/", l+1 );
        }
        web= web.substring(0,l);
        return(web);
    }
    //console.log(items.forEach(item => console.log(item)))
    console.log(items)

    return (
      <div>
        <div className='searchBar'>
          <input type='text' value={q} placeholder='Search...' onChange={(e) => setQ(e.target.value) } />
        </div>

        {isLoading ? (
          <div>is loading...</div> 
        ) : (
            <ol> {
              items.filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
                .map(({ title, url, author, points, num_comments, created_at }) => (
                    <div className="news-title">
                        <li>
                            <p id="title-name"> {title} </p>
                            <p id="url-name">({newUrl( url )})</p>
                            {/* <p id="url-name"> ( {url} ) </p> */}
                            <br />
                            <p id="url-name">{points} points by {author} {num_comments} comments</p>
                        </li>
                    </div>
                ))}
             </ol>

        )}
      </div>
    );
}

export default New


