// src/components/kernelBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiLayers,
    FiHardDrive,
    FiSliders,
    FiShield,
    FiBox,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const KernelBasics = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "Kernel basics - what it is",
                icon: <FiBox />,
                body: (
                    <>
                        <p className="p">
                            The kernel is the core part of an operating system.
                            It runs with highest privilege and controls access
                            to hardware. Apps do not directly touch CPU, memory,
                            disks, or devices. Instead, apps request services
                            from the kernel using system calls.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                App - system call - kernel - driver - hardware
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">User space</div>
                                <ul className="list">
                                    <li>Browsers, editors, games</li>
                                    <li>Runs with limited privileges</li>
                                    <li>
                                        Must ask kernel for files, network,
                                        memory pages, device access
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Kernel space</div>
                                <ul className="list">
                                    <li>Scheduler, memory manager, drivers</li>
                                    <li>Runs with highest privileges</li>
                                    <li>
                                        Must protect system from crashes and
                                        misuse
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "architectures",
                title: "Monolithic vs Microkernel vs Hybrid",
                icon: <FiLayers />,
                body: (
                    <>
                        <p className="p">
                            Kernel architecture is about where OS services run.
                            Some designs keep most services inside the kernel.
                            Some move many services to user space to improve
                            isolation.
                        </p>

                        <div className="stack">
                            <div className="stackCard">
                                <div className="stackTitle">
                                    Monolithic kernel
                                </div>
                                <p className="p">
                                    Most OS services run inside the kernel,
                                    including file system, drivers, networking,
                                    memory management.
                                </p>
                                <ul className="list">
                                    <li>
                                        Pros - very fast because calls stay
                                        inside kernel space
                                    </li>
                                    <li>
                                        Cons - a buggy driver can crash the
                                        whole system
                                    </li>
                                </ul>
                                <div className="exampleRow">
                                    <span className="tag">Example</span>
                                    <span className="exampleText">
                                        Linux is commonly described as
                                        monolithic with loadable modules
                                    </span>
                                </div>
                            </div>

                            <div className="stackCard">
                                <div className="stackTitle">Microkernel</div>
                                <p className="p">
                                    Only minimal core runs in kernel -
                                    scheduling basics, IPC, and low-level memory
                                    handling. Other services like drivers and
                                    file system run in user space as separate
                                    processes.
                                </p>
                                <ul className="list">
                                    <li>
                                        Pros - better isolation, one service
                                        crash does not necessarily crash the
                                        whole OS
                                    </li>
                                    <li>
                                        Cons - more overhead due to message
                                        passing between processes
                                    </li>
                                </ul>
                                <div className="exampleRow">
                                    <span className="tag">Example</span>
                                    <span className="exampleText">
                                        MINIX is a classic teaching example
                                    </span>
                                </div>
                            </div>

                            <div className="stackCard">
                                <div className="stackTitle">Hybrid kernel</div>
                                <p className="p">
                                    Mix of both approaches. Some services run in
                                    kernel for speed, but design tries to keep
                                    structure modular like microkernels.
                                </p>
                                <ul className="list">
                                    <li>
                                        Pros - balances speed and modularity
                                    </li>
                                    <li>
                                        Cons - still large kernel surface area
                                    </li>
                                </ul>
                                <div className="exampleRow">
                                    <span className="tag">Example</span>
                                    <span className="exampleText">
                                        Windows NT is often described as hybrid
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Simple way to remember
                            </div>
                            <div className="monoBlock">
                                Monolithic - everything in kernel for speed
                                {"\n"}
                                Microkernel - minimal kernel, services in user
                                space
                                {"\n"}
                                Hybrid - mix, aims for balance
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "does",
                title: "What the kernel does in daily life",
                icon: <FiSliders />,
                body: (
                    <>
                        <p className="p">
                            The kernel is not one feature. It is a collection of
                            critical managers. These managers decide how the
                            computer behaves when many programs compete for
                            limited resources.
                        </p>

                        <div className="tasks">
                            <div className="task">
                                <div className="taskHead">
                                    <span className="taskIcon">
                                        <FiCpu />
                                    </span>
                                    <div className="taskTitle">
                                        Process scheduling
                                    </div>
                                </div>
                                <p className="p">
                                    CPU time is limited. The kernel scheduler
                                    decides which process or thread runs next.
                                    It tries to be fair and responsive, so your
                                    system feels smooth.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        You are downloading a file and watching
                                        a video at the same time. Scheduler
                                        gives both tasks CPU time so neither
                                        completely freezes.
                                    </p>
                                </div>
                            </div>

                            <div className="task">
                                <div className="taskHead">
                                    <span className="taskIcon">
                                        <FiLayers />
                                    </span>
                                    <div className="taskTitle">
                                        Memory management
                                    </div>
                                </div>
                                <p className="p">
                                    The kernel decides how RAM is used. It gives
                                    memory to processes, frees it when done, and
                                    uses virtual memory so apps can run even if
                                    RAM is limited.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        You open many browser tabs and still the
                                        system works. Some memory pages are
                                        moved to disk temporarily, and brought
                                        back when needed.
                                    </p>
                                </div>
                            </div>

                            <div className="task">
                                <div className="taskHead">
                                    <span className="taskIcon">
                                        <FiHardDrive />
                                    </span>
                                    <div className="taskTitle">
                                        Device drivers
                                    </div>
                                </div>
                                <p className="p">
                                    Drivers are translators between the OS and
                                    hardware. The kernel uses drivers to talk to
                                    keyboard, mouse, disk, GPU, printer, and
                                    network cards.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        When you plug a USB device, the driver
                                        helps the kernel recognize it and lets
                                        apps use it safely.
                                    </p>
                                </div>
                            </div>

                            <div className="task">
                                <div className="taskHead">
                                    <span className="taskIcon">
                                        <FiShield />
                                    </span>
                                    <div className="taskTitle">
                                        File system control
                                    </div>
                                </div>
                                <p className="p">
                                    The kernel provides file operations like
                                    open, read, write, and delete. It enforces
                                    permissions and keeps the file system
                                    consistent even if power fails.
                                </p>
                                <div className="miniNote">
                                    <div className="miniTitle">Example</div>
                                    <p className="p">
                                        When an app saves a file, the kernel
                                        writes data to disk and updates metadata
                                        like file size and last modified time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "why",
                title: "Why kernel concepts matter",
                icon: <FiShield />,
                body: (
                    <>
                        <p className="p">
                            If you understand the kernel, you understand why OS
                            topics connect. Scheduling, memory, files, and
                            synchronization are not separate. They are all parts
                            of one system working together.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Interview hint</div>
                            <p className="p">
                                Most questions are a story. Identify the shared
                                resource first - CPU, memory, disk, or device.
                                Then explain what the kernel would do to manage
                                it.
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
        <Styled.Wrapper id="kernel-basics">
            <div className="top">
                <h2 className="title">Kernel Basics</h2>
                <p className="sub">
                    The kernel is the core controller of the OS. It manages CPU,
                    memory, devices, and files while keeping the system stable
                    and secure.
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

export default KernelBasics;
