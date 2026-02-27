// src/topics/synchronization/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLock,
    FiShield,
    FiAlertTriangle,
    FiRepeat,
    FiCreditCard,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const Synchronization = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "Synchronization - why it exists",
                icon: <FiShield />,
                body: (
                    <>
                        <p className="p">
                            Synchronization means controlling how multiple
                            threads access shared data. Threads run in parallel
                            or get interleaved by CPU scheduling. If two threads
                            touch the same shared variable without rules, the
                            final result can become wrong and unpredictable.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                Shared data + concurrent access + no control =
                                bugs
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Shared resource</div>
                                <ul className="list">
                                    <li>Bank balance variable</li>
                                    <li>Counter in memory</li>
                                    <li>Shared file pointer</li>
                                    <li>Queue used by many threads</li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Goal</div>
                                <ul className="list">
                                    <li>Correctness - no wrong final value</li>
                                    <li>Safety - avoid data corruption</li>
                                    <li>
                                        Predictability - same output each run
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "race",
                title: "Race condition",
                icon: <FiAlertTriangle />,
                body: (
                    <>
                        <p className="p">
                            A race condition happens when the output depends on
                            the timing or order of thread execution. If two
                            threads update the same value at the same time, the
                            final value may differ between runs.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Simple example</div>
                            <div className="monoBlock">
                                balance = 100
                                {"\n"}
                                Thread A: balance = balance + 50
                                {"\n"}
                                Thread B: balance = balance - 30
                                {"\n"}
                                Expected result: 120
                                {"\n"}
                                But without control, result can be wrong
                            </div>
                        </div>

                        <p className="p">
                            The problem is that an update is not one step. It is
                            usually read, compute, write. If both threads read
                            the old value before either writes the new value,
                            one update can get lost.
                        </p>
                    </>
                ),
            },
            {
                key: "critical",
                title: "Critical section",
                icon: <FiRepeat />,
                body: (
                    <>
                        <p className="p">
                            A critical section is the part of code that touches
                            shared data. Only one thread should execute that
                            part at a time. That rule prevents corruption.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Key rule</div>
                            <div className="monoBlock">
                                Only one thread enters the critical section at a
                                time
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">
                                    What belongs inside
                                </div>
                                <ul className="list">
                                    <li>Read and write to shared variables</li>
                                    <li>Update shared list or map</li>
                                    <li>Write to a shared file</li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">What to avoid</div>
                                <ul className="list">
                                    <li>Slow network calls inside lock</li>
                                    <li>Long loops inside lock</li>
                                    <li>Heavy work inside lock</li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Reason</div>
                            <p className="p">
                                Keep the critical section small so other threads
                                do not wait too long.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "mutexSemaphore",
                title: "Mutex vs Semaphore",
                icon: <FiLock />,
                body: (
                    <>
                        <p className="p">
                            Mutex and semaphore are synchronization tools. They
                            both control access, but they solve slightly
                            different problems.
                        </p>

                        <div className="compare">
                            <div className="compareCard">
                                <div className="compareTitle">Mutex</div>
                                <p className="p">
                                    A mutex is like a key for a single shared
                                    resource. Only one thread can hold the key
                                    at a time. Others must wait.
                                </p>

                                <ul className="list">
                                    <li>Acts like a binary lock</li>
                                    <li>Owner matters - same thread unlocks</li>
                                    <li>
                                        Best for protecting one shared thing
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">Think</div>
                                    <div className="monoBlock">
                                        One bathroom - one key
                                    </div>
                                </div>
                            </div>

                            <div className="compareCard">
                                <div className="compareTitle">Semaphore</div>
                                <p className="p">
                                    A semaphore is a counter that allows a fixed
                                    number of threads to enter. It is used for
                                    resource pools or signaling.
                                </p>

                                <ul className="list">
                                    <li>Counter based lock</li>
                                    <li>Does not require strict ownership</li>
                                    <li>
                                        Best for "N slots" resources and
                                        coordination
                                    </li>
                                </ul>

                                <div className="miniNote">
                                    <div className="miniTitle">Think</div>
                                    <div className="monoBlock">
                                        Parking lot - N spots
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Quick summary</div>
                            <div className="monoBlock">
                                Mutex - one at a time
                                {"\n"}
                                Semaphore - up to N at a time
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "deadlock",
                title: "Deadlock basics",
                icon: <FiAlertTriangle />,
                body: (
                    <>
                        <p className="p">
                            Deadlock is a situation where threads are stuck
                            forever because each one is waiting for a resource
                            held by another thread. No one can move forward.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Simple deadlock story
                            </div>
                            <div className="monoBlock">
                                Thread A holds Lock 1 and waits for Lock 2{"\n"}
                                Thread B holds Lock 2 and waits for Lock 1{"\n"}
                                Both wait forever
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Four conditions that cause deadlock
                            </div>
                            <ul className="list">
                                <li>
                                    Mutual exclusion - resource is not shared
                                </li>
                                <li>
                                    Hold and wait - hold one and request another
                                </li>
                                <li>No preemption - cannot force release</li>
                                <li>Circular wait - waiting loop exists</li>
                            </ul>
                        </div>

                        <p className="p">
                            A common prevention trick is to always acquire locks
                            in the same order everywhere. That removes circular
                            wait in many cases.
                        </p>
                    </>
                ),
            },
            {
                key: "example",
                title: "Example - two threads updating same bank balance",
                icon: <FiCreditCard />,
                body: (
                    <>
                        <p className="p">
                            Consider a shared variable called balance. One
                            thread deposits money, another withdraws money. An
                            update looks like read, compute, write.
                        </p>

                        <div className="exampleGrid">
                            <div className="exampleCard">
                                <div className="exampleTitle">
                                    Without synchronization
                                </div>
                                <div className="monoBlock">
                                    balance = 100
                                    {"\n"}
                                    Thread A deposit 50
                                    {"\n"}
                                    Thread B withdraw 30
                                    {"\n"}
                                    {"\n"}
                                    Both read 100
                                    {"\n"}A writes 150
                                    {"\n"}B writes 70
                                    {"\n"}
                                    Final becomes 70
                                    {"\n"}
                                    Deposit got lost
                                </div>
                                <p className="p">
                                    Result depends on timing. This is a race
                                    condition.
                                </p>
                            </div>

                            <div className="exampleCard">
                                <div className="exampleTitle">
                                    With a mutex lock
                                </div>
                                <div className="monoBlock">
                                    lock(mutex)
                                    {"\n"}
                                    balance = balance + 50
                                    {"\n"}
                                    unlock(mutex)
                                    {"\n"}
                                    {"\n"}
                                    lock(mutex)
                                    {"\n"}
                                    balance = balance - 30
                                    {"\n"}
                                    unlock(mutex)
                                    {"\n"}
                                    Final becomes 120
                                </div>
                                <p className="p">
                                    Only one thread updates balance at a time,
                                    so no update is lost.
                                </p>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Beginner rule</div>
                            <p className="p">
                                If more than one thread can touch the same data,
                                protect that data using a lock or design a safe
                                message passing approach.
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
        <Styled.Wrapper id="synchronization">
            <div className="top">
                <h2 className="title">Synchronization</h2>
                <p className="sub">
                    Learn how OS and programs keep shared data safe when
                    multiple threads run at the same time.
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

export default Synchronization;
