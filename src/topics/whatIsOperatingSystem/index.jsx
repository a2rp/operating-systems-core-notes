// src/components/whatIsOperatingSystem/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiCpu,
    FiHardDrive,
    FiWifi,
    FiShield,
    FiCode,
    FiTerminal,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const WhatIsOperatingSystem = () => {
    const [openKey, setOpenKey] = useState("role");

    const items = useMemo(() => {
        return [
            {
                key: "role",
                title: "What is an Operating System",
                icon: <FiLayers />,
                body: (
                    <>
                        <p className="p">
                            An Operating System, or OS, is the main software
                            that runs on a computer and manages the hardware for
                            you. It sits between your programs and the physical
                            machine, and it makes sure everything works safely
                            and smoothly.
                        </p>

                        <div className="miniGrid">
                            <div className="miniCard">
                                <div className="miniTitle">In simple words</div>
                                <p className="p">
                                    OS is like a manager. Programs ask for CPU,
                                    memory, files, and devices. The OS decides
                                    what to give, when to give, and how to keep
                                    things safe.
                                </p>
                            </div>

                            <div className="miniCard">
                                <div className="miniTitle">What OS manages</div>
                                <ul className="list">
                                    <li>
                                        <span className="mono">CPU</span> time
                                        for processes
                                    </li>
                                    <li>
                                        <span className="mono">Memory</span> for
                                        running programs
                                    </li>
                                    <li>
                                        <span className="mono">Files</span> and
                                        folders on storage
                                    </li>
                                    <li>
                                        <span className="mono">Devices</span>{" "}
                                        like disk, keyboard, network
                                    </li>
                                    <li>
                                        <span className="mono">Security</span>{" "}
                                        permissions and isolation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="monoBlock">
                            Program - system call - OS kernel - driver -
                            hardware
                        </div>
                    </>
                ),
            },
            {
                key: "mediator",
                title: "OS role as a mediator",
                icon: <FiShield />,
                body: (
                    <>
                        <p className="p">
                            Programs do not directly control hardware. If every
                            program could touch the disk and memory freely, one
                            buggy app could crash the whole system or steal data
                            from other apps.
                        </p>

                        <div className="callout">
                            <FiShield />
                            <div className="calloutText">
                                <div className="calloutTitle">
                                    Why mediator is needed
                                </div>
                                <div className="calloutSub">
                                    OS controls access to hardware and shared
                                    resources so multiple programs can run
                                    safely at the same time.
                                </div>
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                OS gives each program a controlled environment
                                to run
                            </li>
                            <li>
                                OS prevents one program from corrupting another
                                program's memory
                            </li>
                            <li>
                                OS applies permissions for files and devices
                            </li>
                            <li>OS shares CPU fairly using scheduling</li>
                        </ul>
                    </>
                ),
            },
            {
                key: "example",
                title: "Example - Browser request flow",
                icon: <FiWifi />,
                body: (
                    <>
                        <p className="p">
                            When you type a website in a browser, the browser is
                            just a program. It needs network, CPU, memory, and
                            sometimes disk. The OS helps at every step.
                        </p>

                        <div className="flow">
                            <div className="step">
                                <div className="stepTop">
                                    <FiTerminal />
                                    <span>1 - Browser creates a request</span>
                                </div>
                                <div className="stepSub">
                                    Browser asks OS for network access.
                                </div>
                            </div>

                            <div className="arrow">-</div>

                            <div className="step">
                                <div className="stepTop">
                                    <FiWifi />
                                    <span>2 - OS uses network stack</span>
                                </div>
                                <div className="stepSub">
                                    OS talks to the network driver and sends
                                    packets.
                                </div>
                            </div>

                            <div className="arrow">-</div>

                            <div className="step">
                                <div className="stepTop">
                                    <FiCpu />
                                    <span>3 - CPU runs the browser</span>
                                </div>
                                <div className="stepSub">
                                    OS schedules CPU time so browser can run.
                                </div>
                            </div>

                            <div className="arrow">-</div>

                            <div className="step">
                                <div className="stepTop">
                                    <FiLayers />
                                    <span>4 - Memory is used</span>
                                </div>
                                <div className="stepSub">
                                    OS gives memory to store page, images, and
                                    code.
                                </div>
                            </div>

                            <div className="arrow">-</div>

                            <div className="step">
                                <div className="stepTop">
                                    <FiHardDrive />
                                    <span>5 - Disk cache and files</span>
                                </div>
                                <div className="stepSub">
                                    OS reads and writes cache, cookies, and
                                    downloads.
                                </div>
                            </div>

                            <div className="arrow">-</div>

                            <div className="step">
                                <div className="stepTop">
                                    <FiCode />
                                    <span>6 - Output on screen</span>
                                </div>
                                <div className="stepSub">
                                    OS and drivers help display the final
                                    output.
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <p className="p">
                                Browser does not control hardware. It requests
                                services. OS coordinates hardware and returns
                                results.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "kernel",
                title: "Kernel",
                icon: <FiCpu />,
                body: (
                    <>
                        <p className="p">
                            The kernel is the core part of the OS. It runs with
                            the highest privilege and directly controls hardware
                            through drivers.
                        </p>

                        <ul className="list">
                            <li>
                                Kernel decides which process runs on the CPU
                            </li>
                            <li>Kernel manages memory and virtual memory</li>
                            <li>Kernel controls file system operations</li>
                            <li>Kernel handles interrupts from devices</li>
                        </ul>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Easy way to remember
                            </div>
                            <div className="monoBlock">
                                Kernel is the boss that touches hardware.
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "syscalls",
                title: "System calls",
                icon: <FiCode />,
                body: (
                    <>
                        <p className="p">
                            A system call is a safe way for a program to ask the
                            OS for help. Programs cannot directly do privileged
                            actions like reading a disk block or changing memory
                            protection. They request the OS using system calls.
                        </p>

                        <div className="miniGrid">
                            <div className="miniCard">
                                <div className="miniTitle">
                                    Common system call examples
                                </div>
                                <ul className="list">
                                    <li>Open a file, read, write, close</li>
                                    <li>Create a process, start a program</li>
                                    <li>Allocate memory for a program</li>
                                    <li>Send and receive data over network</li>
                                </ul>
                            </div>

                            <div className="miniCard">
                                <div className="miniTitle">
                                    What happens inside
                                </div>
                                <p className="p">
                                    Program enters kernel mode, OS checks
                                    permissions, OS does the work, then returns
                                    result back to the program.
                                </p>
                            </div>
                        </div>

                        <div className="monoBlock">
                            App calls function - OS system call - kernel does
                            work
                        </div>
                    </>
                ),
            },
            {
                key: "modes",
                title: "User mode vs Kernel mode",
                icon: <FiShield />,
                body: (
                    <>
                        <p className="p">
                            OS uses two main modes to protect the system.
                            Programs normally run in user mode. The kernel runs
                            in kernel mode.
                        </p>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">User mode</div>
                                <ul className="list">
                                    <li>Normal apps run here</li>
                                    <li>Limited permissions</li>
                                    <li>Cannot directly access hardware</li>
                                    <li>
                                        Must use system calls to request OS work
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Kernel mode</div>
                                <ul className="list">
                                    <li>OS kernel runs here</li>
                                    <li>Full permissions</li>
                                    <li>
                                        Can access hardware and CPU instructions
                                    </li>
                                    <li>Handles system calls and interrupts</li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Why modes exist</div>
                            <p className="p">
                                If every app had full access, one mistake could
                                crash everything. Modes protect the computer.
                            </p>
                        </div>
                    </>
                ),
            },
        ];
    }, []);

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    return (
        <Styled.Wrapper id="what-is-operating-system">
            <div className="top">
                <div className="kicker">Foundations</div>
                <h2 className="title">What is an Operating System</h2>
                <p className="sub">
                    A beginner friendly introduction to OS role, browser request
                    flow, and the three most important concepts - kernel, system
                    calls, and user mode vs kernel mode.
                </p>
            </div>

            <div className="accordion">
                {items.map((item) => {
                    const isOpen = openKey === item.key;

                    return (
                        <div className="item" key={item.key}>
                            <button
                                type="button"
                                className="btn"
                                onClick={() => toggle(item.key)}
                                aria-expanded={isOpen}
                            >
                                <span className="left">
                                    <span className="icon">{item.icon}</span>
                                    <span className="text">{item.title}</span>
                                </span>

                                <span className="right">
                                    {isOpen ? (
                                        <FiChevronUp />
                                    ) : (
                                        <FiChevronDown />
                                    )}
                                </span>
                            </button>

                            {isOpen && <div className="body">{item.body}</div>}
                        </div>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default WhatIsOperatingSystem;
