import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="title-header">
            <ul>
                <li><button href="">Y</button></li>
                <li><a href="" id="hacker-news">Hacker News</a></li>
                {/* <li><a href="" id="navi"> new  |</a></li>
                <li><a href="" id="navi">past |</a></li>
                <li><a href="" id="navi">comments |</a></li>
                <li><a href="" id="navi">ask |</a></li>
                <li><a href="" id="navi">show |</a></li>
                <li><a href="" id="navi">jobs |</a></li> */}
                {/* <li><a href="" id="navi">submit |</a></li> */}
            </ul>
            
        </div>
    )
}
