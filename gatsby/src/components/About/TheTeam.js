import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TheTeam = ({about}) => {
    return(
        <TheTeamContainer>
            <div className='container'>
                <div className='top'>
                    <h2>The Team</h2>
                </div>
                <p className='desc'>{about.teamDescription}</p>
                <ul className='services'>
                    {about.team.map((member) => {
                        const iconGetDataImage = getImage(member.image && member.image.asset)
                        const iconGetDataImageAlt = member.image && member.image.alt                        
                        return (
                            <li className={`${member.empty} item`} key={member._kay}>
                                <div className='esquinas'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <GatsbyImage
                                    image={iconGetDataImage}
                                    alt={iconGetDataImageAlt}
                                />
                                <div className='text'>
                                    <h3>{member.empty === true ? '' : <span>></span>}{member.title}</h3>
                                    <p>{member.position}</p>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </TheTeamContainer>
    )
}

const TheTeamContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 20px auto 30px;
        padding: 20px;
        .texto {
            margin-top: 100px;
            border-bottom: solid 1px var(--white);
            padding-bottom: 30px;
            h2 {
                font-family: var(--regular);
                font-size: 2.2rem;
                @media (max-width: 650px){
                    font-size: 1.8rem;
                }
            }
        }
        .desc {
            padding: 50px 0 0;
            width: 40%;
            @media (max-width: 650px){
                width: 80%;
            }
        }
        .top {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-bottom: 20px;
            border-bottom: solid 1px var(--white);
            @media (max-width: 550px){
                flex-direction: column;
                align-items: flex-start;
                a {
                    margin-top: 20px;
                }
            }
            span {
                margin-right: 30px;
            }
            a {
                background-color: var(--softPink);
                display: inline-block;
                color: var(--black);

            }
        }
        ul.services {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 40px;
            margin-top: 50px;
            border-bottom: solid 1px var(--white);
            padding-bottom: 80px;
            @media (max-width: 850px){
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 550px){
                grid-template-columns: repeat(1, 1fr);
            }
            li {
                padding: 10px;
                position: relative;
                h3 {
                    font-family: var(--regular);
                    font-size: 0.85rem;
                    margin-top: 15px;
                    span {
                        margin-right: 10px;
                    }
                    @media (max-width: 940px){
                        font-size: 1rem;
                    }
                }
                p {
                    margin-left: 20px;
                    color: var(--black);
                }
                .esquinas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    div {
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background-color: none;
                        z-index: -1;
                        &:nth-child(1) {
                            top: -5px;
                            left: -5px;
                            border-top: solid 1px var(--white);
                            border-left: solid 1px var(--white);
                        }
                        &:nth-child(2) {
                            top: -5px;
                            right: -5px;
                            border-top: solid 1px var(--white);
                            border-right: solid 1px var(--white);
                        }
                        &:nth-child(3) {
                            bottom: -5px;
                            left: -5px;
                            border-bottom: solid 1px var(--white);
                            border-left: solid 1px var(--white);
                        }
                        &:nth-child(4) {
                            bottom: -5px;
                            right: -5px;
                            border-bottom: solid 1px var(--white);
                            border-right: solid 1px var(--white);
                        }
                    }
                }
            }
            
        }
    }

`

export default TheTeam