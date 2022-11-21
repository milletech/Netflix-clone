import React, { useEffect, useState } from 'react'
import "../styles/Nav.css"
import axios from "../axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const API_KEY="fb7b984ce96fa0a8f163493397c4f2d5";


function Nav(props) {
    const navigate=useNavigate()
    const [show,setShow]=useState(false);

    const [search,setSearch]=useState("");
    // const [movies,setMovies]=useState([]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        });

        return () => window.removeEventListener("scroll",null);
    }, []);


    function handleSubmit(e){

        e.preventDefault();

        if(search !== ""){
            async function fetchData(){
                const request=await axios.get(`/search/movie?api_key=${API_KEY}&query=${search}`);
                // setMovies(request.data.results);
                // console.log(request.data.results) 
                props.searchHandler(request.data.results);
                navigate("/search")
            }
            fetchData()
        }
    }
    

    // console.log(movies);

  return (
    <div className={`nav ${show && "nav__black"}`}>

        <Link to="/">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        </Link>
        

        <div className="side">
            <form className="search" onSubmit={handleSubmit} >
                <input type="text" placeholder='Search' required value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button>
                    <img className="search__icon" src="images/search.svg" alt="" />
                </button>
            </form>
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
        </div>
    </div>
  )
}

export default Nav;