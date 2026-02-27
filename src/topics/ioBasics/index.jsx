// src/topics/ioBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiActivity,
    FiArrowRight,
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiHardDrive,
    FiInbox,
    FiZap,
} from "react-icons/fi";

const IoBasics = () => {
    const [openKey, setOpenKey] = useState("overview");

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                icon: <FiInbox />,
                title: "I O basics - what it means",
                body: (
                    <>
                        <p className="p">
                            I O means Input and Output. It is how programs talk
                            to the outside world - keyboard, mouse, screen,
                            disk, network, USB devices. Apps do not directly
                            control hardware. The OS handles I O using drivers,
                            buffers, and interrupts so many programs can use
                            devices safely.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                App requests I O - OS checks access - driver
                                talks to device - data comes back to app
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Input examples</div>
                                <ul className="list">
                                    <li>Keyboard key press</li>
                                    <li>Mouse movement</li>
                                    <li>Incoming network packet</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="colTitle">Output examples</div>
                                <ul className="list">
                                    <li>Writing a file to disk</li>
                                    <li>Printing on screen</li>
                                    <li>Sending data over network</li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "blocking",
                icon: <FiActivity />,
                title: "Blocking vs non-blocking I O",
                body: (
                    <>
                        <p className="p">
                            The big idea is simple - does your program wait, or
                            can it continue doing other work while I O happens.
                            This matters because I O is usually much slower than
                            CPU.
                        </p>

                        <div className="cards2">
                            <div className="card">
                                <div className="cardTitle">Blocking I O</div>
                                <p className="p">
                                    The calling thread waits until the operation
                                    finishes. Your code stops at read or write
                                    until data is available or written.
                                </p>

                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Example idea
                                    </div>
                                    <p className="p">
                                        You call read on a file or socket. If no
                                        data is ready, the thread sleeps and
                                        resumes later when data arrives.
                                    </p>
                                </div>

                                <ul className="list">
                                    <li>Simple to code and reason about</li>
                                    <li>
                                        Can waste time if you block too often
                                    </li>
                                </ul>
                            </div>

                            <div className="card">
                                <div className="cardTitle">
                                    Non-blocking I O
                                </div>
                                <p className="p">
                                    The call returns immediately. If data is not
                                    ready, it returns a special result, and your
                                    program can do something else.
                                </p>

                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Example idea
                                    </div>
                                    <p className="p">
                                        You try to read. If nothing is ready,
                                        you get "would block" and continue other
                                        tasks, then check again later.
                                    </p>
                                </div>

                                <ul className="list">
                                    <li>Better for high concurrency systems</li>
                                    <li>
                                        More complex because you handle
                                        readiness and retries
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Quick mental model</div>
                            <div className="monoBlock">
                                Blocking - wait here until data is ready
                                {"\n"}
                                Non-blocking - return now, check again later
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "interrupts",
                icon: <FiZap />,
                title: "Interrupts - how devices get attention",
                body: (
                    <>
                        <p className="p">
                            An interrupt is a signal from hardware that says "I
                            have something important". Instead of the CPU
                            constantly checking every device, devices can notify
                            the OS only when needed. This saves CPU time.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Why interrupts matter
                            </div>
                            <p className="p">
                                If the CPU had to keep asking the keyboard "any
                                key pressed" millions of times per second, it
                                would waste time. Interrupts let the keyboard
                                notify the OS only when a key is pressed.
                            </p>
                        </div>

                        <div className="flow">
                            <div className="step">
                                Device event happens - key press, disk finished,
                                network packet arrives
                            </div>
                            <div className="arrow">
                                <FiArrowRight />
                            </div>
                            <div className="step">
                                Device raises an interrupt signal
                            </div>
                            <div className="arrow">
                                <FiArrowRight />
                            </div>
                            <div className="step">
                                CPU pauses current work and runs an interrupt
                                handler
                            </div>
                            <div className="arrow">
                                <FiArrowRight />
                            </div>
                            <div className="step">
                                OS driver processes the event and wakes waiting
                                process if needed
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Good for</div>
                                <ul className="list">
                                    <li>Responsiveness</li>
                                    <li>Less CPU waste</li>
                                    <li>Many devices at once</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="colTitle">Cost</div>
                                <ul className="list">
                                    <li>Context switching overhead</li>
                                    <li>
                                        Interrupt storms can hurt performance
                                    </li>
                                    <li>
                                        Need careful driver design and priority
                                        handling
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "disk",
                icon: <FiHardDrive />,
                title: "Disk scheduling - SCAN and C-SCAN",
                body: (
                    <>
                        <p className="p">
                            Disk scheduling is how the OS decides the order of
                            disk requests. The disk head movement costs time, so
                            good ordering reduces total movement and improves
                            throughput.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Simple idea</div>
                            <div className="monoBlock">
                                Less head movement - faster average response
                            </div>
                        </div>

                        <div className="cards2">
                            <div className="card">
                                <div className="cardTitle">SCAN</div>
                                <p className="p">
                                    The disk head moves in one direction,
                                    serving requests on the way, then reverses
                                    direction at the end, like an elevator.
                                </p>

                                <div className="visual">
                                    <div className="track">
                                        <span className="t">0</span>
                                        <span className="t">25</span>
                                        <span className="t">50</span>
                                        <span className="t">75</span>
                                        <span className="t">100</span>
                                    </div>
                                    <div className="line">
                                        <span className="dot head">
                                            <FiCpu />
                                        </span>
                                        <span className="dash" />
                                        <span className="dot req" />
                                        <span className="dot req" />
                                        <span className="dot req" />
                                        <span className="dash" />
                                        <span className="dot req" />
                                    </div>
                                    <div className="caption">
                                        Head goes forward serving requests, then
                                        comes back.
                                    </div>
                                </div>

                                <ul className="list">
                                    <li>Fairer than random ordering</li>
                                    <li>Good throughput</li>
                                    <li>Some requests may wait for reversal</li>
                                </ul>
                            </div>

                            <div className="card">
                                <div className="cardTitle">C-SCAN</div>
                                <p className="p">
                                    Like SCAN, but only serves requests in one
                                    direction. When it reaches the end, it jumps
                                    back to the start without serving on the
                                    return.
                                </p>

                                <div className="visual">
                                    <div className="track">
                                        <span className="t">0</span>
                                        <span className="t">25</span>
                                        <span className="t">50</span>
                                        <span className="t">75</span>
                                        <span className="t">100</span>
                                    </div>
                                    <div className="line">
                                        <span className="dot head">
                                            <FiCpu />
                                        </span>
                                        <span className="dash" />
                                        <span className="dot req" />
                                        <span className="dot req" />
                                        <span className="dot req" />
                                        <span className="dash jump" />
                                        <span className="dot req" />
                                    </div>
                                    <div className="caption">
                                        Head serves in one direction, then jumps
                                        back and starts again.
                                    </div>
                                </div>

                                <ul className="list">
                                    <li>
                                        More uniform waiting time across tracks
                                    </li>
                                    <li>
                                        Can reduce starvation for far tracks
                                    </li>
                                    <li>
                                        Jump back adds overhead but is
                                        predictable
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">
                                SCAN vs C-SCAN in one line
                            </div>
                            <div className="monoBlock">
                                SCAN - elevator goes up and down serving both
                                ways
                                {"\n"}
                                C-SCAN - elevator serves only going up, returns
                                empty
                            </div>
                        </div>
                    </>
                ),
            },
        ];
    }, []);

    return (
        <Styled.Wrapper id="io-basics">
            <div className="top">
                <h2 className="title">I O Basics</h2>
                <p className="sub">
                    Optional but strong topic. I O explains why programs wait,
                    how devices notify the CPU, and how disks handle many
                    requests efficiently.
                </p>
            </div>

            <div className="accordion">
                {items.map((item) => {
                    const isOpen = openKey === item.key;

                    return (
                        <div className="accItem" key={item.key}>
                            <button
                                type="button"
                                className="accBtn"
                                onClick={() => toggle(item.key)}
                                aria-expanded={isOpen}
                            >
                                <span className="accLeft">
                                    <span className="accIcon">{item.icon}</span>
                                    <span className="accTitle">
                                        {item.title}
                                    </span>
                                </span>

                                <span className="accRight">
                                    {isOpen ? (
                                        <FiChevronUp />
                                    ) : (
                                        <FiChevronDown />
                                    )}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="accBody">{item.body}</div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default IoBasics;
