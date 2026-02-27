// src/topics/memoryManagement/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiMap,
    FiGrid,
    FiCode,
    FiAlertTriangle,
    FiActivity,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const MemoryManagement = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "Memory management - overview",
                icon: <FiLayers />,
                body: (
                    <>
                        <p className="p">
                            Memory management is the OS responsibility of
                            organizing and controlling how RAM is used. Many
                            programs run at the same time, and each program
                            needs memory that feels private and continuous. The
                            OS creates this illusion while keeping the system
                            safe and fast.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <ul className="list">
                                <li>
                                    Each process gets an isolated memory view
                                    called an address space
                                </li>
                                <li>
                                    OS maps virtual addresses to physical RAM
                                </li>
                                <li>
                                    If RAM is not enough, OS uses disk as backup
                                    using virtual memory
                                </li>
                            </ul>
                        </div>
                    </>
                ),
            },
            {
                key: "addressSpace",
                title: "Address space - what it means",
                icon: <FiMap />,
                body: (
                    <>
                        <p className="p">
                            An address space is the range of memory addresses a
                            process can use. Programs use addresses like 0x1000,
                            0x2000, etc. But those are virtual addresses, not
                            actual RAM locations.
                        </p>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">
                                    Virtual address space
                                </div>
                                <ul className="list">
                                    <li>
                                        What the program thinks memory looks
                                        like
                                    </li>
                                    <li>
                                        Usually starts from low addresses and
                                        grows
                                    </li>
                                    <li>
                                        Each process gets its own separate view
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">
                                    Physical memory (RAM)
                                </div>
                                <ul className="list">
                                    <li>Actual hardware memory chips</li>
                                    <li>Shared by all processes</li>
                                    <li>
                                        OS decides where each process data
                                        actually sits
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Simple idea</div>
                            <div className="monoBlock">
                                Program uses virtual address - OS translates it
                                to a real RAM address
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "pagingVsSegmentation",
                title: "Paging vs Segmentation - easy comparison",
                icon: <FiGrid />,
                body: (
                    <>
                        <p className="p">
                            Paging and segmentation are two ways to organize
                            memory. Both help OS manage memory, but they do it
                            differently.
                        </p>

                        <div className="compare">
                            <div className="compareCard">
                                <div className="compareTitle">Paging</div>
                                <p className="p">
                                    Memory is divided into fixed-size blocks.
                                    Virtual memory uses pages and RAM uses page
                                    frames. OS maps each virtual page to a
                                    physical frame.
                                </p>

                                <ul className="list">
                                    <li>Fixed size pieces</li>
                                    <li>Reduces external fragmentation</li>
                                    <li>
                                        Needs page table to translate addresses
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">Think</div>
                                    <div className="monoBlock">
                                        Like a notebook with same size pages
                                    </div>
                                </div>
                            </div>

                            <div className="compareCard">
                                <div className="compareTitle">Segmentation</div>
                                <p className="p">
                                    Memory is divided into logical parts called
                                    segments, like code, stack, heap. Each
                                    segment can be different size.
                                </p>

                                <ul className="list">
                                    <li>Variable size pieces</li>
                                    <li>Matches program structure</li>
                                    <li>
                                        Can cause external fragmentation if many
                                        different sizes are allocated and freed
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">Think</div>
                                    <div className="monoBlock">
                                        Like folders of different sizes
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">One-line difference</div>
                            <div className="monoBlock">
                                Paging - fixed size blocks
                                {"\n"}
                                Segmentation - logical variable size blocks
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "virtualMemory",
                title: "Virtual memory - why it exists",
                icon: <FiCode />,
                body: (
                    <>
                        <p className="p">
                            Virtual memory is the technique where OS uses disk
                            as an extension of RAM. This allows programs to run
                            even when RAM is not enough. Only the needed pages
                            are kept in RAM at a time.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Key idea</div>
                            <div className="monoBlock">
                                Keep active pages in RAM - keep inactive pages
                                on disk
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                Lets the system run bigger programs than
                                available RAM
                            </li>
                            <li>
                                Helps run many programs together without
                                crashing
                            </li>
                            <li>
                                Uses page replacement policies when RAM is full
                            </li>
                        </ul>
                    </>
                ),
            },
            {
                key: "pageFault",
                title: "Page fault - a simple story",
                icon: <FiAlertTriangle />,
                body: (
                    <>
                        <p className="p">
                            A page fault happens when a program tries to access
                            a page that is not currently in RAM. This is normal
                            in virtual memory systems.
                        </p>

                        <div className="story">
                            <div className="storyTitle">Story</div>
                            <ol className="ordered">
                                <li>
                                    Program tries to read an address in a page
                                </li>
                                <li>
                                    CPU checks page table and finds the page is
                                    not in RAM
                                </li>
                                <li>Hardware raises a page fault interrupt</li>
                                <li>
                                    OS pauses the program and loads the page
                                    from disk into RAM
                                </li>
                                <li>
                                    Page table is updated and program continues
                                </li>
                            </ol>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Important note</div>
                            <p className="p">
                                Page fault does not always mean an error. Most
                                of the time it just means the data was on disk
                                and OS had to bring it into RAM.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "thrashing",
                title: "Thrashing - when the system becomes slow",
                icon: <FiActivity />,
                body: (
                    <>
                        <p className="p">
                            Thrashing happens when the system spends more time
                            moving pages between RAM and disk than doing real
                            work. It usually occurs when too many processes are
                            running or RAM is too small.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">How it looks</div>
                            <ul className="list">
                                <li>
                                    CPU usage feels low but disk usage is high
                                </li>
                                <li>Apps freeze or become extremely slow</li>
                                <li>System keeps swapping pages repeatedly</li>
                            </ul>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Simple reason</div>
                            <div className="monoBlock">
                                Too many active pages - not enough RAM -
                                constant page faults
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "example",
                title: "Example - why paging helps run bigger programs than RAM",
                icon: <FiLayers />,
                body: (
                    <>
                        <p className="p">
                            Suppose a program needs 2 GB memory, but your system
                            has only 1 GB free RAM. Without paging, the program
                            would fail to run. With paging and virtual memory,
                            the OS keeps only the active parts of the program in
                            RAM and stores the rest on disk.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Practical picture</div>
                            <div className="monoBlock">
                                RAM - working desk
                                {"\n"}
                                Disk - storage cupboard
                                {"\n"}
                                OS moves only needed pages to the desk
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                You can open large apps with limited RAM because
                                only active pages stay in RAM
                            </li>
                            <li>
                                Performance depends on how often page faults
                                happen
                            </li>
                            <li>
                                SSD makes virtual memory less painful than HDD,
                                but RAM is still much faster
                            </li>
                        </ul>
                    </>
                ),
            },
        ];
    }, []);

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    return (
        <Styled.Wrapper id="memory-management">
            <div className="top">
                <h2 className="title">Memory Management</h2>
                <p className="sub">
                    OS memory management creates a safe illusion of private
                    memory for each process and makes the system work even when
                    RAM is limited.
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

export default MemoryManagement;
