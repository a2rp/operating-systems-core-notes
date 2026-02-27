// src/topics/systemCalls/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCode,
    FiCpu,
    FiHardDrive,
    FiShield,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";
import { FaUsb } from "react-icons/fa";

const SystemCalls = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "What are system calls",
                icon: <FiCode />,
                body: (
                    <>
                        <p className="p">
                            A system call is a controlled way for an app to ask
                            the operating system for a service. Apps usually run
                            in user mode, which cannot directly access hardware
                            or kernel data. System calls switch into the kernel
                            so the OS can do the work safely.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                User program - system call - kernel does work -
                                result returned
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Why they exist</div>
                                <ul className="list">
                                    <li>
                                        Hardware access must be protected, not
                                        every app can touch the disk or memory
                                    </li>
                                    <li>
                                        OS must enforce permissions and
                                        isolation between processes
                                    </li>
                                    <li>
                                        OS provides a consistent API across
                                        different hardware
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">
                                    What you notice as a user
                                </div>
                                <ul className="list">
                                    <li>
                                        Opening files works the same for all
                                        apps
                                    </li>
                                    <li>
                                        Many apps can run without crashing each
                                        other
                                    </li>
                                    <li>
                                        Devices work through drivers without
                                        apps knowing the details
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "categories",
                title: "Main categories of system calls",
                icon: <FiCpu />,
                body: (
                    <>
                        <p className="p">
                            System calls are usually grouped by what they
                            control. You do not need to memorize every system
                            call. Learn the categories and what they do.
                        </p>

                        <div className="cards">
                            <div className="card">
                                <div className="cardHead">
                                    <span className="cardIcon">
                                        <FiCpu />
                                    </span>
                                    <div className="cardTitle">
                                        Process control
                                    </div>
                                </div>

                                <p className="p">
                                    Create processes, run programs, and manage
                                    process lifecycle.
                                </p>

                                <ul className="list">
                                    <li>
                                        <span className="mono">fork</span> -
                                        creates a new process by duplicating the
                                        current one
                                    </li>
                                    <li>
                                        <span className="mono">exec</span> -
                                        replaces the current process with a new
                                        program
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Simple example
                                    </div>
                                    <p className="p">
                                        A shell can start a new program by
                                        forking and then executing the new
                                        program in the child process.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <span className="cardIcon">
                                        <FiHardDrive />
                                    </span>
                                    <div className="cardTitle">File I/O</div>
                                </div>

                                <p className="p">
                                    Open files, read data, write data, and close
                                    files.
                                </p>

                                <ul className="list">
                                    <li>
                                        <span className="mono">open</span> -
                                        request access to a file
                                    </li>
                                    <li>
                                        <span className="mono">read</span> -
                                        read bytes from an open file
                                    </li>
                                    <li>
                                        <span className="mono">write</span> -
                                        write bytes to an open file
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Simple example
                                    </div>
                                    <p className="p">
                                        A text editor uses open, read, and write
                                        to load and save files.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="cardHead">
                                    <span className="cardIcon">
                                        <FaUsb />
                                    </span>
                                    <div className="cardTitle">
                                        Device management
                                    </div>
                                </div>

                                <p className="p">
                                    Access hardware devices through drivers, and
                                    request device operations.
                                </p>

                                <ul className="list">
                                    <li>
                                        Apps ask the OS, not the device directly
                                    </li>
                                    <li>OS routes request to correct driver</li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Simple example
                                    </div>
                                    <p className="p">
                                        Printing a document triggers OS-managed
                                        print queue and printer driver work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "openExample",
                title: 'Example - open("file") triggers kernel work',
                icon: <FiShield />,
                body: (
                    <>
                        <p className="p">
                            When an app calls open on a file, it is not just
                            "opening a file". The kernel does multiple checks
                            and operations to make sure it is safe and correct.
                        </p>

                        <div className="example">
                            <div className="exampleTitle">
                                What the kernel typically does
                            </div>

                            <div className="flow">
                                <div className="step">
                                    1. Validate the path and input arguments
                                </div>
                                <div className="arrow">-</div>

                                <div className="step">
                                    2. Check permissions for the user and
                                    process
                                </div>
                                <div className="arrow">-</div>

                                <div className="step">
                                    3. Find the file in the file system
                                    directory structure
                                </div>
                                <div className="arrow">-</div>

                                <div className="step">
                                    4. Create an entry inside the process file
                                    table
                                </div>
                                <div className="arrow">-</div>

                                <div className="step">
                                    5. Return a file descriptor to the app
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Key term</div>
                            <p className="p">
                                A file descriptor is a small number returned by
                                the OS that represents an open file. The app
                                uses this number later for read and write.
                            </p>
                        </div>

                        <div className="callout">
                            <FiShield />
                            <span>
                                System calls keep the system safe by controlling
                                access to shared resources.
                            </span>
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
        <Styled.Wrapper id="system-calls">
            <div className="top">
                <h2 className="title">System Calls</h2>
                <p className="sub">
                    System calls are the OS service API. They let apps request
                    safe access to CPU, memory, files, and devices through the
                    kernel.
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

export default SystemCalls;
