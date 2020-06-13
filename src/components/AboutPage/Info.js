import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';
export default function Info() {
    return (
        <section className= "py-5"> 
            <div className = "container">
                <div className = "row">
                    <div className = "col-10 mx-auto col-md-6 my-3"> 
                        <img src = {aboutBcg} alt = "about image" className = "img-fluid img-thumbnail" style = {{background: "var(--darkGrey)"}}></img>
                    </div>
                    <div className = "col-10 mx-auto col-md-6 my-3"> 
                         <Title title ="about us" ></Title>
                         <p className ="text-lead text-muted my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis commodo ante, ac suscipit libero venenatis quis. Cras erat nisi, tristique non ultrices sed, maximus auctor metus. Duis convallis dapibus rhoncus. Morbi est quam, tempus quis malesuada suscipit, ultricies nec felis. Duis a arcu consequat metus molestie tempus. Nullam at placerat massa. Vivamus bibendum, lorem sed maximus finibus, nisi dui aliquam felis, at egestas metus ex vel elit. Suspendisse mauris purus, imperdiet ut luctus suscipit, porta at nulla. Nunc vel sem blandit, faucibus neque at, ornare ligula. Nulla hendrerit tortor eu felis faucibus, nec vulputate nibh ullamcorper. Quisque accumsan elit in metus ornare varius. Mauris aliquam orci eget vestibulum iaculis. Maecenas posuere non felis nec sollicitudin. Nam eu auctor nisi. Aenean feugiat dui et vulputate rhoncus.

                            Fusce et elementum justo. 
                            </p>
                            <button className="main-link" style={{marginTop:"2rem;"}}> More info</button>
                     </div>
                </div>
            </div>
           
        </section>
    )
}
