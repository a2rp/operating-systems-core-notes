// src/topics/processAndThread/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiCpu,
    FiGitBranch,
    FiBox,
    FiActivity,
    FiChevronDown,
    FiChevronUp,
    FiClock,
} from "react-icons/fi";

const ProcessAndThread = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "Process vs Thread - the clean definition",
                icon: <FiLayers />,
                body: (
                    <>
                        <p className="p">
                            A process is a running program. It has its own
                            memory space and resources. A thread is the unit of
                            execution inside a process. A process can have one
                            thread or many threads.
                        </p>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Process</div>
                                <ul className="list">
                                    <li>
                                        Program in execution with its own
                                        address space
                                    </li>
                                    <li>
                                        Has its own memory - code, heap, stack,
                                        data
                                    </li>
                                    <li>
                                        More isolation - one process crash does
                                        not always crash others
                                    </li>
                                    <li>
                                        Heavier to create compared to a thread
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Thread</div>
                                <ul className="list">
                                    <li>Execution unit inside a process</li>
                                    <li>
                                        Shares memory with other threads in the
                                        same process
                                    </li>
                                    <li>Has its own stack and registers</li>
                                    <li>
                                        Lighter and faster than creating a new
                                        process
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                Process - own address space, stronger isolation
                                {"\n"}
                                Thread - shared address space, faster
                                communication
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "examples",
                title: "Real-world examples you can remember",
                icon: <FiActivity />,
                body: (
                    <>
                        <p className="p">
                            Examples make this topic easy. A process is like a
                            separate room. Threads are like workers inside the
                            same room sharing the same table and tools.
                        </p>

                        <div className="exampleGrid">
                            <div className="exampleCard">
                                <div className="exampleTitle">
                                    Chrome tabs - processes
                                </div>
                                <p className="p">
                                    Each tab is usually a separate process. If
                                    one tab crashes, other tabs keep working.
                                    This is process isolation in action.
                                </p>
                                <div className="monoBlock">
                                    Tab A process crashes - Tab B stays alive
                                </div>
                            </div>

                            <div className="exampleCard">
                                <div className="exampleTitle">
                                    One tab - multiple threads
                                </div>
                                <p className="p">
                                    Inside one tab, different work can run in
                                    separate threads. Rendering can be one
                                    thread, networking can be another.
                                </p>
                                <div className="monoBlock">
                                    Same tab process
                                    {"\n"}
                                    Thread 1 - UI render
                                    {"\n"}
                                    Thread 2 - network fetch
                                </div>
                            </div>
                        </div>

                        <div className="callout">
                            <FiCpu />
                            <span>
                                OS schedules threads on CPU. In many systems,
                                the scheduler works at the thread level.
                            </span>
                        </div>
                    </>
                ),
            },
            {
                key: "pcb",
                title: "PCB and context switch - what happens under the hood",
                icon: <FiBox />,
                body: (
                    <>
                        <p className="p">
                            OS cannot run all processes at the same time on one
                            CPU core. So it quickly switches between them. To do
                            that safely, OS stores the current state of the
                            running process.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">
                                PCB - Process Control Block
                            </div>
                            <p className="p">
                                PCB is a data structure maintained by the OS. It
                                stores everything OS needs to manage a process.
                            </p>
                            <ul className="list">
                                <li>Process id and state</li>
                                <li>Program counter and CPU registers</li>
                                <li>Scheduling info like priority</li>
                                <li>Memory management info</li>
                                <li>Open files and resources</li>
                            </ul>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Context switch</div>
                            <p className="p">
                                Context switch means OS stops one running
                                process or thread, saves its state, and loads
                                another state so the CPU can continue execution.
                            </p>

                            <div className="monoBlock">
                                Save state of A into PCB
                                {"\n"}
                                Load state of B from PCB
                                {"\n"}
                                CPU resumes B
                            </div>

                            <p className="p">
                                Context switching has a cost. If OS switches too
                                often, CPU spends time switching instead of
                                doing useful work.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "states",
                title: "Process states - New, Ready, Running, Waiting, Terminated",
                icon: <FiGitBranch />,
                body: (
                    <>
                        <p className="p">
                            A process moves through different states based on
                            CPU availability and I/O events. Understanding the
                            states helps you answer many scheduling questions.
                        </p>

                        <div className="stateFlow">
                            <div className="stateRow">
                                <span className="state">New</span>
                                <span className="arrow">-</span>
                                <span className="state">Ready</span>
                                <span className="arrow">-</span>
                                <span className="state">Running</span>
                                <span className="arrow">-</span>
                                <span className="state">Terminated</span>
                            </div>

                            <div className="stateRow">
                                <span className="state">Running</span>
                                <span className="arrow">-</span>
                                <span className="state">Waiting</span>
                                <span className="arrow">-</span>
                                <span className="state">Ready</span>
                            </div>
                        </div>

                        <div className="stateCards">
                            <div className="sCard">
                                <div className="sTitle">New</div>
                                <p className="p">
                                    Process is being created. OS sets up PCB,
                                    allocates initial resources.
                                </p>
                            </div>

                            <div className="sCard">
                                <div className="sTitle">Ready</div>
                                <p className="p">
                                    Process is ready to run but waiting for CPU.
                                    It is in the ready queue.
                                </p>
                            </div>

                            <div className="sCard">
                                <div className="sTitle">Running</div>
                                <p className="p">
                                    Process is currently executing on the CPU.
                                </p>
                            </div>

                            <div className="sCard">
                                <div className="sTitle">Waiting</div>
                                <p className="p">
                                    Process is waiting for an event like I/O,
                                    disk read, network, or user input.
                                </p>
                            </div>

                            <div className="sCard">
                                <div className="sTitle">Terminated</div>
                                <p className="p">
                                    Process has finished execution or was
                                    stopped. OS releases resources.
                                </p>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Quick example</div>
                            <p className="p">
                                You open a program - it becomes Ready. When CPU
                                gives time - it becomes Running. If it reads a
                                file - it goes Waiting. After I/O is done - it
                                returns to Ready.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "quick",
                title: "Fast recap - one screen summary",
                icon: <FiClock />,
                body: (
                    <>
                        <div className="monoBlock">
                            Process - running program with own address space
                            {"\n"}
                            Thread - execution unit inside process, shares
                            memory
                            {"\n"}
                            PCB - OS data that stores process info
                            {"\n"}
                            Context switch - save A state, load B state
                            {"\n"}
                            States - New, Ready, Running, Waiting, Terminated
                        </div>

                        <div className="callout">
                            <FiLayers />
                            <span>
                                Most interview questions connect these five
                                lines.
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
        <Styled.Wrapper id="process-and-thread">
            <div className="top">
                <h2 className="title">Process and Thread</h2>
                <p className="sub">
                    Process is a running program with its own address space.
                    Thread is an execution unit inside a process and usually
                    shares memory with other threads in the same process.
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

export default ProcessAndThread;
