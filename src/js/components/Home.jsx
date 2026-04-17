import React from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

//create your first component
const cardsData = [
    {
	      imageUrl: "https://picsum.photos/id/10/500/325",
		        title: "Tarjeta 1",
				      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
					        buttonLabel: "VER MÁS!"
							    },
								    {
									      imageUrl: "https://picsum.photos/id/20/500/325",
										        title: "tarjeta 2",
												      description: "Explicabo magnam fugit commodi assumenda veniam obcaecati in quia aut mollitia.",
													        buttonLabel: "VER MÁS!"
															    },
																    {
																	      imageUrl: "https://picsum.photos/id/30/500/325",
																		        title: "tarjeta 3",
																				      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
																					        buttonLabel: "VER MÁS!"
																							    },
																								    {
																									      imageUrl: "https://picsum.photos/id/40/500/325",
																										        title: "Tarjeta 4",
																												      description: "Explicabo magnam fugit commodi assumenda veniam obcaecati in quia aut mollitia.",
																													        buttonLabel: "VER MÁS!"
																															    }
																																  ];

																																  const Home = () => {
																																  	
																																	return (
																																	    <div className="d-flex flex-column min-vh-100">
																																		      <Nav />
																																			        
																																					      
																																						        <div className="container flex-grow-1 mb-5">
																																								        <Jumbotron />
																																										        
																																												        
																																														        <div className="row">
																																																          
																																																		            {cardsData.map((card, index) => (
																																																					            <div className="col-lg-3 col-md-6 mb-4" key={index}>
																																																								              <Card 
																																																											                  imageUrl={card.imageUrl} 
																																																															                  title={card.title} 
																																																																			                  description={card.description} 
																																																																							                  buttonLabel={card.buttonLabel} 
																																																																											                />
																																																																															            </div>
																																																																																		          ))}
																																																																																				          </div>
																																																																																						        </div>

																																																																																								      <Footer />
																																																																																									      </div>
																																																																																										    );

																																																																																											};

																																																																																											export default Home;