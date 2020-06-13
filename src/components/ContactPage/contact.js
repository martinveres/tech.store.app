import React from 'react'
import Title from '../Title';

export default function contact() {
    return (
      <section className="py-5">
          <div className = "row ">
              <div className = "col-10 col-md-6 mx-auto my-3">
                  <Title title = "Contact us"></Title>
                    <form className = "mt-5"  action="https://formspree.io/mwkrorzp" method="POST" >
                        <div className = "form-group">
                            <input type = "text" name = "firstName" className = "form-control" placeholder = "Martin Veres"/>
                        </div>
                        <div className = "form-group">
                                <input type = "text" name = "email" className = "form-control" placeholder = "youremail@email.com"/>
                        </div>
                        <div className = "form-group">
                             <input type = "text" name = "subject" className = "form-control" placeholder = "Subject"/>
                        </div>
                        <div className = "form">
                            <textarea  name = "message" className = "form-control" placeholder = "Your message:" rows = "10"/> 
                        </div>
                        <div className = "form-group my-3">
                            <input type= "submit" value = "Send" className = "form-control bg-primary text-white"/>
                        </div>
                    </form>

              </div>
          </div>
      </section>
    )
}
