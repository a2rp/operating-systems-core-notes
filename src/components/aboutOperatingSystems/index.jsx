// src/components/aboutOperatingSystems/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiLayers,
    FiShield,
    FiHardDrive,
    FiActivity,
    FiCode,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const AboutOperatingSystems = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [openKey, setOpenKey] = useState("what");

    const heroImg = useMemo(() => {
        // Using Picsum for a clean, neutral hero image
        // Change id if you want a different photo
        return "https://picsum.photos/id/180/1200/700";
    }, []);

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    return (
        <Styled.Wrapper id="about-operating-systems">
            <div className="top">
                <div className="badgeRow">
                    <span className="badge">
                        <FiLayers />
                        Core Notes
                    </span>
                    <span className="badge muted">
                        <FiActivity />
                        Single page revision
                    </span>
                </div>

                <h1 className="title">Operating Systems Core Notes</h1>

                <p className="sub">
                    OS is the software layer that makes hardware usable. It
                    decides who runs on CPU, what stays in memory, how files are
                    stored, and how programs talk to devices.
                </p>
            </div>

            <div className="hero">
                {!imgLoaded && <div className="heroSkeleton" />}
                <img
                    src={heroImg}
                    alt="Operating systems"
                    onLoad={() => setImgLoaded(true)}
                    style={{ opacity: imgLoaded ? 1 : 0 }}
                />

                <div className="heroOverlay">
                    <div className="heroTitle">
                        Think like the OS: CPU, memory, files, devices.
                    </div>
                    <div className="heroMeta">
                        Beginner friendly - fast revision - interview ready
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="cardHead">
                        <span className="icon">
                            <FiCpu />
                        </span>
                        <h3 className="h3">What an OS really does</h3>
                    </div>

                    <ul className="list">
                        <li>
                            <span className="mono">CPU</span> - schedules which
                            process gets time
                        </li>
                        <li>
                            <span className="mono">Memory</span> - allocates RAM
                            and uses virtual memory
                        </li>
                        <li>
                            <span className="mono">Storage</span> - manages
                            files and directories
                        </li>
                        <li>
                            <span className="mono">I/O</span> - handles devices
                            via drivers and interrupts
                        </li>
                        <li>
                            <span className="mono">Security</span> - isolates
                            processes and enforces permissions
                        </li>
                    </ul>

                    <div className="miniNote">
                        <div className="miniTitle">One-line mental model</div>
                        <div className="monoBlock">
                            App - system call - kernel - driver - hardware
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="cardHead">
                        <span className="icon">
                            <FiCode />
                        </span>
                        <h3 className="h3">A tiny example</h3>
                    </div>

                    <p className="p">
                        When you open a file in any app, the app does not talk
                        to the disk directly. It requests the OS using system
                        calls. The OS checks permission, finds the data in the
                        file system, reads blocks from disk, and returns bytes
                        to the app.
                    </p>

                    <div className="example">
                        <div className="exampleTitle">Flow</div>
                        <div className="flow">
                            <div className="step">App requests "open file"</div>
                            <div className="arrow">-</div>
                            <div className="step">Kernel validates access</div>
                            <div className="arrow">-</div>
                            <div className="step">File system finds blocks</div>
                            <div className="arrow">-</div>
                            <div className="step">Disk driver reads data</div>
                            <div className="arrow">-</div>
                            <div className="step">Bytes returned to app</div>
                        </div>
                    </div>

                    <div className="callout">
                        <FiHardDrive />
                        <span>
                            File I/O looks simple, but OS is doing real work
                            behind the scenes.
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="cardHead">
                        <span className="icon">
                            <FiShield />
                        </span>
                        <h3 className="h3">
                            Key terms you will see everywhere
                        </h3>
                    </div>

                    <div className="chips">
                        <span className="chip">Kernel</span>
                        <span className="chip">System call</span>
                        <span className="chip">Process</span>
                        <span className="chip">Thread</span>
                        <span className="chip">Context switch</span>
                        <span className="chip">Scheduling</span>
                        <span className="chip">Paging</span>
                        <span className="chip">Virtual memory</span>
                        <span className="chip">Mutex</span>
                        <span className="chip">Semaphore</span>
                        <span className="chip">Deadlock</span>
                        <span className="chip">File system</span>
                        <span className="chip">Interrupt</span>
                    </div>

                    <div className="miniNote">
                        <div className="miniTitle">
                            Why these matter in interviews
                        </div>
                        <p className="p">
                            Most questions are just these words combined into a
                            scenario. If the mental model is clear, answers
                            become simple.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AboutOperatingSystems;
