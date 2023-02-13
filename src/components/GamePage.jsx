import React, { useState } from 'react'
import '../stylesheets/GamePage.css'

function GamePage() {
    const [earnings, setEarnings] = useState(0)

    return (
        <div className='main-container'>
            <div className='header-container'>
                <div className='item-header'>WHO...</div>
                <div className='item-header'>WHERE...</div>
                <div className='item-header'>WHEN...</div>
                <div className='item-header'>WHAT...</div>
                <div className='item-header'>HOW MANY...</div>
            </div>
            <div className='question-container'>
                <div className='row'>
                    <div className='card'>
                        <div className='front'>$100</div>
                            <div className='back'>
                                is the writer of Harry Potter?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 100)}>JK Rowling</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 100)}>Jane Hawking</button>
                                </div>
                            </div>
                    </div>
                    <div className='card' >
                        <div className='front'>$100</div>
                            <div className='back'>
                                did backgammon originate?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 100)}>China</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 100)}>Persia</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$100</div>
                            <div className='back'>
                                did the Cold War end?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 100)}>1989</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 100)}>1991</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$100</div>
                            <div className='back'>
                                is the last letter of the Greek alphabet?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 100)}>Epsilon</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 100)}>Omega</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                    <div className='front'>$100</div>
                            <div className='back'>
                            compartments are in a cow’s stomach?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 100)}>Four</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 100)}>Five</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='card'>
                        <div className='front'>$200</div>
                            <div className='back'>
                                was the first American in space?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 200)}>Alan Shepard</button>
                                    <button className='btn'onClick={() => setEarnings(prev => prev - 200)}>Edwin Aldrin</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$200</div>
                            <div className='back'>
                                can you find the Petronas Towers?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 200)}>Abu Dhabi</button>
                                    <button className='btn'onClick={() => setEarnings(prev => prev + 200)}>Kuala Lumpur</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$200</div>
                            <div className='back'>
                            did the website "Facebook" launch?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 200)}>2004</button>
                                    <button className='btn'onClick={() => setEarnings(prev => prev - 200)}>2001</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$200</div>
                            <div className='back'>
                                year was Queen Elizabeth II born?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 200)}>1926</button>
                                    <button className='btn'onClick={() => setEarnings(prev => prev - 200)}>1936</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                    <div className='front'>$200</div>
                            <div className='back'>
                                eyes do caterpillars have?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 200)}>Ten</button>
                                    <button className='btn'onClick={() => setEarnings(prev => prev + 200)}>Twelve</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='card'>
                        <div className='front'>$300</div>
                            <div className='back'>
                                named the Pacific Ocean?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>James Cook</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>Ferdinand Magellan</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$300</div>
                            <div className='back'>
                                would you find the pinna on your body?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>Stomach</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>Ear</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$300</div>
                            <div className='back'>
                                was the Tamagotchi digital pet released?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>1999</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>1996</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$300</div>
                            <div className='back'>
                            is the name of the fastest land animal?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>Cheetah</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>Jaguar</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                    <div className='front'>$300</div>
                            <div className='back'>
                            seasons did the ‘Oprah Winfrey Show’ run for?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>Twenty five</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>Thirty five</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='card'>
                        <div className='front'>$400</div>
                            <div className='back'>
                                is the author of Jurassic Park?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 400)}>Michael Crichton</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 400)}>Jon Krakauer</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$400</div>
                            <div className='back'>
                                is the Sea of Tranquility located?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 400)}>The moon</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 400)}>Neptune</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$400</div>
                            <div className='back'>
                                was the DVD invented?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 300)}>1995</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 300)}>1996</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$400</div>
                            <div className='back'>
                            was the third country to get the atomic bomb?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 400)}>Britain</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 400)}>France</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$400</div>
                            <div className='back'>
                            countries border Kyrgyzstan?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 400)}>Three</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 400)}>Four</button>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='card'>
                        <div className='front'>$500</div>
                            <div className='back'>
                                was the first woman to win a Nobel Prize (in 1903)?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 500)}>Marie Curie</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 500)}>Jane Dewey</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$500</div>
                            <div className='back'>
                                is the uvula located?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 500)}>In the palate</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 500)}>In the throat</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$500</div>
                            <div className='back'>
                                was the iPhone released?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 500)}>2004</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 500)}>2007</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$500</div>
                            <div className='back'>
                            is the unit of currency in Laos?
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 500)}>Dong</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 500)}>Kip</button>
                                </div>
                            </div>
                    </div>
                    <div className='card'>
                        <div className='front'>$500</div>
                            <div className='back'>
                                degrees does the earth rotate each hour
                                <div className='btn-container'>
                                    <button className='btn' onClick={() => setEarnings(prev => prev - 500)}>Seventeen</button>
                                    <button className='btn' onClick={() => setEarnings(prev => prev + 500)}>Fifteen</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='earning-container'>
                <p>YOUR EARNINGS: ${earnings}</p>
            </div>
        </div>
    )
}

export default GamePage
