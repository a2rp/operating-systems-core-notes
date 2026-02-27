// src/topics/deadlocks/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiAlertTriangle,
    FiLink,
    FiLock,
    FiRepeat,
    FiShield,
    FiSearch,
    FiTool,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const Deadlocks = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "What is a deadlock",
                icon: <FiAlertTriangle />,
                body: (
                    <>
                        <p className="p">
                            A deadlock is a situation where two or more
                            processes are stuck forever because each one is
                            waiting for a resource that another one holds. No
                            one can move forward, so the system makes no
                            progress for those tasks.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                Each process holds something and waits for
                                something else. The wait never ends.
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">
                                    Deadlock vs slowdown
                                </div>
                                <ul className="list">
                                    <li>
                                        Deadlock - no progress possible without
                                        external action
                                    </li>
                                    <li>
                                        Slowdown - progress is slow but still
                                        happening
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Common resources</div>
                                <ul className="list">
                                    <li>Printer, scanner, GPU</li>
                                    <li>Files, database row locks</li>
                                    <li>Memory buffers</li>
                                    <li>Network sockets</li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "conditions",
                title: "The 4 necessary conditions",
                icon: <FiLink />,
                body: (
                    <>
                        <p className="p">
                            A deadlock can happen only when all four conditions
                            are true at the same time. If you break even one
                            condition, you prevent deadlock.
                        </p>

                        <div className="cards">
                            <div className="condCard">
                                <div className="condHead">
                                    <span className="condIcon">
                                        <FiLock />
                                    </span>
                                    <div className="condTitle">
                                        1. Mutual exclusion
                                    </div>
                                </div>
                                <p className="p">
                                    At least one resource cannot be shared. Only
                                    one process can use it at a time.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        A printer can print one job at a time.
                                    </p>
                                </div>
                            </div>

                            <div className="condCard">
                                <div className="condHead">
                                    <span className="condIcon">
                                        <FiRepeat />
                                    </span>
                                    <div className="condTitle">
                                        2. Hold and wait
                                    </div>
                                </div>
                                <p className="p">
                                    A process holds at least one resource and
                                    waits to acquire another resource.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        Process A holds the printer and waits
                                        for a file lock.
                                    </p>
                                </div>
                            </div>

                            <div className="condCard">
                                <div className="condHead">
                                    <span className="condIcon">
                                        <FiShield />
                                    </span>
                                    <div className="condTitle">
                                        3. No preemption
                                    </div>
                                </div>
                                <p className="p">
                                    Resources cannot be forcibly taken away. A
                                    process releases a resource only voluntarily
                                    after finishing its work.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        OS cannot just take a file lock away in
                                        the middle of a critical write.
                                    </p>
                                </div>
                            </div>

                            <div className="condCard">
                                <div className="condHead">
                                    <span className="condIcon">
                                        <FiLink />
                                    </span>
                                    <div className="condTitle">
                                        4. Circular wait
                                    </div>
                                </div>
                                <p className="p">
                                    There is a cycle of waiting. Process A waits
                                    for B, B waits for C, and C waits for A.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        A waits for B's resource, B waits for
                                        A's resource.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">
                                How to use this in answers
                            </div>
                            <p className="p">
                                When you see a deadlock story, identify each
                                condition. Then explain how to break one of
                                them.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "handling",
                title: "Handling deadlocks",
                icon: <FiTool />,
                body: (
                    <>
                        <p className="p">
                            There are four common approaches. Different systems
                            pick different strategies depending on cost and
                            safety.
                        </p>

                        <div className="stack">
                            <div className="stackCard">
                                <div className="stackTitle">1. Prevention</div>
                                <p className="p">
                                    Prevent deadlocks by ensuring at least one
                                    of the four necessary conditions can never
                                    be true.
                                </p>
                                <ul className="list">
                                    <li>
                                        Remove hold and wait by forcing a
                                        process to request all resources at once
                                    </li>
                                    <li>
                                        Remove circular wait by ordering
                                        resources and always acquiring in that
                                        order
                                    </li>
                                    <li>
                                        Sometimes allow preemption for certain
                                        resources
                                    </li>
                                </ul>
                                <div className="miniNote">
                                    <div className="miniTitle">Simple rule</div>
                                    <div className="monoBlock">
                                        Always lock resources in a fixed order.
                                    </div>
                                </div>
                            </div>

                            <div className="stackCard">
                                <div className="stackTitle">2. Avoidance</div>
                                <p className="p">
                                    Avoidance means the OS makes a decision at
                                    runtime. It checks if granting a request
                                    keeps the system in a safe state.
                                </p>
                                <ul className="list">
                                    <li>
                                        The classic concept here is Banker’s
                                        algorithm
                                    </li>
                                    <li>
                                        It is about ensuring safe allocation
                                        before giving resources
                                    </li>
                                </ul>
                                <div className="miniNote">
                                    <div className="miniTitle">Key idea</div>
                                    <p className="p">
                                        Grant requests only if the system can
                                        still finish all processes in some
                                        order.
                                    </p>
                                </div>
                            </div>

                            <div className="stackCard">
                                <div className="stackTitle">
                                    3. Detection and recovery
                                </div>
                                <p className="p">
                                    Allow deadlocks to happen, detect them, and
                                    then recover by breaking the cycle.
                                </p>
                                <ul className="list">
                                    <li>
                                        Detection - build a wait-for graph and
                                        look for cycles
                                    </li>
                                    <li>
                                        Recovery - terminate a process or take
                                        back resources safely
                                    </li>
                                </ul>
                                <div className="miniNote">
                                    <div className="miniTitle">
                                        Common recovery actions
                                    </div>
                                    <ul className="list">
                                        <li>Kill one process in the cycle</li>
                                        <li>
                                            Roll back to a checkpoint and retry
                                        </li>
                                        <li>
                                            Preempt a resource if it is safe to
                                            do so
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "example",
                title: "Example - printer + file lock situation",
                icon: <FiSearch />,
                body: (
                    <>
                        <p className="p">
                            Imagine two processes. Each needs two resources to
                            finish a print job.
                        </p>

                        <div className="exampleGrid">
                            <div className="exampleCard">
                                <div className="exampleTitle">Resources</div>
                                <ul className="list">
                                    <li>Printer - exclusive</li>
                                    <li>File lock - exclusive</li>
                                </ul>
                            </div>

                            <div className="exampleCard">
                                <div className="exampleTitle">Process A</div>
                                <ul className="list">
                                    <li>Holds the printer</li>
                                    <li>Requests the file lock</li>
                                </ul>
                            </div>

                            <div className="exampleCard">
                                <div className="exampleTitle">Process B</div>
                                <ul className="list">
                                    <li>Holds the file lock</li>
                                    <li>Requests the printer</li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">What happens</div>
                            <div className="monoBlock">
                                A holds printer, waits for file lock
                                {"\n"}B holds file lock, waits for printer
                                {"\n"}
                                Both wait forever - deadlock
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">How to fix it</div>
                            <ul className="list">
                                <li>
                                    Prevention - enforce order: always lock file
                                    first, then request printer
                                </li>
                                <li>
                                    Detection - detect cycle and cancel one job
                                    to free resources
                                </li>
                            </ul>
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
        <Styled.Wrapper id="deadlocks">
            <div className="top">
                <h2 className="title">Deadlocks</h2>
                <p className="sub">
                    Deadlocks are must-know because they connect locks,
                    resources, scheduling, and system stability. Learn the 4
                    conditions first, then learn handling strategies.
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

export default Deadlocks;
