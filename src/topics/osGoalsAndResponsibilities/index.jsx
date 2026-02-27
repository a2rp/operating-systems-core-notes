// src/components/osGoalsAndResponsibilities/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCheckCircle,
    FiShield,
    FiCpu,
    FiUsers,
    FiLayers,
    FiLock,
    FiZap,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const OsGoalsAndResponsibilities = () => {
    const [openKey, setOpenKey] = useState("goals");

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    const goals = useMemo(() => {
        return [
            {
                key: "convenience",
                icon: <FiCheckCircle />,
                title: "Convenience",
                oneLine:
                    "OS makes the computer easy to use so apps can run without managing hardware details.",
                points: [
                    "Apps do not manually control CPU or RAM - OS gives safe APIs",
                    "You get files, folders, windows, and settings as a usable layer",
                    "Drivers hide hardware differences so the same app can run on many machines",
                ],
                exampleTitle: "Example",
                example:
                    "When you click a file to open it, the app just asks the OS to open it. The OS finds the file, checks permissions, reads data from disk, and returns it to the app.",
            },
            {
                key: "efficiency",
                icon: <FiZap />,
                title: "Efficiency",
                oneLine:
                    "OS uses hardware smartly so the system stays fast and responsive.",
                points: [
                    "CPU scheduling gives each process time without wasting cycles",
                    "Memory management keeps active data in RAM and uses virtual memory when needed",
                    "I/O buffering and caching reduce slow disk operations",
                ],
                exampleTitle: "Example",
                example:
                    "If one app is waiting for disk or network, OS can run another app on CPU instead of keeping CPU idle. This improves overall performance.",
            },
            {
                key: "fairness",
                icon: <FiUsers />,
                title: "Fairness",
                oneLine:
                    "OS shares CPU, memory, and devices among processes so one program cannot hog everything.",
                points: [
                    "Time slicing gives each runnable process a fair chance",
                    "Priority rules exist, but OS still prevents starvation in well-designed schedulers",
                    "Resource limits can stop one app from consuming all RAM or CPU",
                ],
                exampleTitle: "Example",
                example:
                    "If a heavy app is running, OS still lets your music player and browser remain usable because CPU time is distributed across processes.",
            },
            {
                key: "security",
                icon: <FiShield />,
                title: "Security",
                oneLine:
                    "OS protects the system from unsafe access by isolating processes and enforcing permissions.",
                points: [
                    "User mode vs kernel mode prevents apps from directly controlling hardware",
                    "File permissions decide who can read, write, or execute a file",
                    "Process isolation stops one app from reading another app's private memory",
                ],
                exampleTitle: "Example",
                example:
                    "A normal app cannot access another app's memory or your system files directly. OS blocks it unless permission is explicitly granted.",
            },
        ];
    }, []);

    return (
        <Styled.Wrapper id="os-goals-and-responsibilities">
            <div className="top">
                <div className="kicker">
                    <span className="dot" />
                    Operating Systems
                </div>

                <h2 className="title">OS Goals and Responsibilities</h2>

                <p className="sub">
                    An Operating System has two big jobs - make the computer
                    usable and keep it under control. To do that, OS is designed
                    around a few core goals. If you understand these goals, many
                    OS topics start feeling connected and logical.
                </p>
            </div>

            <div className="accordion">
                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("goals")}
                        aria-expanded={openKey === "goals"}
                    >
                        <span className="left">
                            <FiLayers />
                            Goals in one view
                        </span>
                        <span className="right">
                            {openKey === "goals" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "goals" && (
                        <div className="accBody">
                            <div className="pillRow">
                                <span className="pill">
                                    <FiCheckCircle />
                                    Convenience
                                </span>
                                <span className="pill">
                                    <FiZap />
                                    Efficiency
                                </span>
                                <span className="pill">
                                    <FiUsers />
                                    Fairness
                                </span>
                                <span className="pill">
                                    <FiShield />
                                    Security
                                </span>
                            </div>

                            <div className="note">
                                <div className="noteTitle">
                                    Beginner mental model
                                </div>
                                <div className="mono">
                                    OS is a referee between programs and
                                    hardware.
                                </div>
                                <p className="p">
                                    Programs want resources. Hardware is
                                    limited. OS decides who gets what, when, and
                                    how safely.
                                </p>
                            </div>

                            <div className="cards">
                                {goals.map((g) => (
                                    <div className="goalCard" key={g.key}>
                                        <div className="goalHead">
                                            <span className="icon">
                                                {g.icon}
                                            </span>
                                            <div className="headText">
                                                <div className="goalTitle">
                                                    {g.title}
                                                </div>
                                                <div className="goalOneLine">
                                                    {g.oneLine}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="list">
                                            {g.points.map((p, idx) => (
                                                <li key={`${g.key}-${idx}`}>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="example">
                                            <div className="exampleTitle">
                                                {g.exampleTitle}
                                            </div>
                                            <p className="p">{g.example}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("examples")}
                        aria-expanded={openKey === "examples"}
                    >
                        <span className="left">
                            <FiCpu />
                            Real examples you see daily
                        </span>
                        <span className="right">
                            {openKey === "examples" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "examples" && (
                        <div className="accBody">
                            <div className="exampleGrid">
                                <div className="exCard">
                                    <div className="exHead">
                                        <span className="exIcon">
                                            <FiCpu />
                                        </span>
                                        <div className="exTitle">
                                            Multitasking
                                        </div>
                                    </div>
                                    <p className="p">
                                        Your system runs many processes at the
                                        same time. OS switches the CPU between
                                        tasks very fast. It feels like
                                        everything is running together, but CPU
                                        time is shared in small slices.
                                    </p>
                                    <div className="mini">
                                        <div className="miniTitle">
                                            Why it matters
                                        </div>
                                        <div className="mono">
                                            Keeps UI responsive while heavy work
                                            continues.
                                        </div>
                                    </div>
                                </div>

                                <div className="exCard">
                                    <div className="exHead">
                                        <span className="exIcon">
                                            <FiLock />
                                        </span>
                                        <div className="exTitle">
                                            File permissions
                                        </div>
                                    </div>
                                    <p className="p">
                                        OS controls who can read, write, or
                                        execute a file. This prevents random
                                        apps or users from changing important
                                        system files and protects personal data.
                                    </p>
                                    <div className="mini">
                                        <div className="miniTitle">
                                            Simple idea
                                        </div>
                                        <div className="mono">
                                            Access allowed only with permission.
                                        </div>
                                    </div>
                                </div>

                                <div className="exCard">
                                    <div className="exHead">
                                        <span className="exIcon">
                                            <FiShield />
                                        </span>
                                        <div className="exTitle">
                                            Process isolation
                                        </div>
                                    </div>
                                    <p className="p">
                                        Each process gets its own memory space.
                                        One app cannot read or modify another
                                        app's memory directly. If one app
                                        crashes, the OS prevents it from taking
                                        everything down.
                                    </p>
                                    <div className="mini">
                                        <div className="miniTitle">Outcome</div>
                                        <div className="mono">
                                            Better stability and security.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="note">
                                <div className="noteTitle">
                                    Common confusion
                                </div>
                                <p className="p">
                                    People think OS is only a user interface.
                                    Real OS work happens in the kernel -
                                    managing CPU time, memory, files, and device
                                    access.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("responsibilities")}
                        aria-expanded={openKey === "responsibilities"}
                    >
                        <span className="left">
                            <FiShield />
                            Responsibilities OS must handle
                        </span>
                        <span className="right">
                            {openKey === "responsibilities" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "responsibilities" && (
                        <div className="accBody">
                            <p className="p">
                                These are the core responsibilities that show up
                                again and again across all OS topics. Think of
                                them as the OS checklist.
                            </p>

                            <div className="respGrid">
                                <div className="respCard">
                                    <div className="respHead">
                                        <FiCpu />
                                        <div>Process management</div>
                                    </div>
                                    <p className="p">
                                        Create, schedule, pause, resume, and
                                        stop processes. Also handles threads and
                                        context switching.
                                    </p>
                                </div>

                                <div className="respCard">
                                    <div className="respHead">
                                        <FiLayers />
                                        <div>Memory management</div>
                                    </div>
                                    <p className="p">
                                        Allocate RAM, free memory, and provide
                                        virtual memory so programs can run
                                        safely without overwriting each other.
                                    </p>
                                </div>

                                <div className="respCard">
                                    <div className="respHead">
                                        <FiLock />
                                        <div>File and storage management</div>
                                    </div>
                                    <p className="p">
                                        Organize files and directories, manage
                                        permissions, and maintain metadata so
                                        storage remains consistent.
                                    </p>
                                </div>

                                <div className="respCard">
                                    <div className="respHead">
                                        <FiShield />
                                        <div>Protection and security</div>
                                    </div>
                                    <p className="p">
                                        Enforce user access rules, isolate
                                        processes, and separate kernel
                                        privileges from user programs.
                                    </p>
                                </div>
                            </div>

                            <div className="note">
                                <div className="noteTitle">Quick summary</div>
                                <div className="mono">
                                    OS manages CPU, memory, files, and devices -
                                    safely and fairly.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default OsGoalsAndResponsibilities;
