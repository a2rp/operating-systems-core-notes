// src/topics/cpuScheduling/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiClock,
    FiTrendingUp,
    FiList,
    FiRepeat,
    FiStar,
    FiLayers,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const CpuScheduling = () => {
    const [openKey, setOpenKey] = useState("why");

    const sampleProcesses = useMemo(() => {
        // Arrival time is assumed 0 for quick revision math
        return [
            { id: "P1", burst: 6 },
            { id: "P2", burst: 2 },
            { id: "P3", burst: 8 },
            { id: "P4", burst: 3 },
        ];
    }, []);

    const calcFCFS = (list) => {
        let time = 0;

        return list.map((p) => {
            const waiting = time;
            time += p.burst;
            const turnaround = time;

            return {
                id: p.id,
                burst: p.burst,
                waiting,
                turnaround,
            };
        });
    };

    const calcSJF = (list) => {
        // Non-preemptive SJF, all arrive together
        const sorted = [...list].sort((a, b) => a.burst - b.burst);

        let time = 0;

        return sorted.map((p) => {
            const waiting = time;
            time += p.burst;
            const turnaround = time;

            return {
                id: p.id,
                burst: p.burst,
                waiting,
                turnaround,
            };
        });
    };

    const avg = (rows, key) => {
        if (!rows.length) return 0;
        const sum = rows.reduce((acc, r) => acc + (r[key] || 0), 0);
        return Number((sum / rows.length).toFixed(2));
    };

    const fcfsRows = useMemo(
        () => calcFCFS(sampleProcesses),
        [sampleProcesses],
    );
    const sjfRows = useMemo(() => calcSJF(sampleProcesses), [sampleProcesses]);

    const toggle = (key) => {
        setOpenKey((prev) => (prev === key ? "" : key));
    };

    return (
        <Styled.Wrapper id="cpu-scheduling">
            <div className="top">
                <h2 className="title">CPU Scheduling</h2>
                <p className="sub">
                    CPU is limited. Many processes compete. Scheduling is the OS
                    decision logic that picks which process runs next so the
                    system stays responsive and fair.
                </p>
            </div>

            <div className="accordion">
                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("why")}
                        aria-expanded={openKey === "why"}
                    >
                        <span className="accLeft">
                            <span className="accIcon">
                                <FiCpu />
                            </span>
                            <span className="accTitle">
                                Why scheduling exists
                            </span>
                        </span>
                        <span className="accRight">
                            {openKey === "why" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "why" && (
                        <div className="accBody">
                            <p className="p">
                                At any moment, CPU can run only one thread per
                                core. But your system has many tasks: browser,
                                music, downloads, updates, background services.
                                The scheduler decides who gets CPU time now, who
                                waits, and how long each one runs before
                                switching.
                            </p>

                            <div className="miniNote">
                                <div className="miniTitle">At a glance</div>
                                <ul className="list">
                                    <li>
                                        Scheduling improves responsiveness for
                                        interactive apps
                                    </li>
                                    <li>
                                        Scheduling prevents one long task from
                                        blocking everything
                                    </li>
                                    <li>
                                        Scheduling balances fairness and
                                        throughput
                                    </li>
                                </ul>
                            </div>

                            <div className="monoBlock">
                                Goal - keep system fast for the user, while also
                                finishing work efficiently.
                            </div>
                        </div>
                    )}
                </div>

                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("metrics")}
                        aria-expanded={openKey === "metrics"}
                    >
                        <span className="accLeft">
                            <span className="accIcon">
                                <FiTrendingUp />
                            </span>
                            <span className="accTitle">
                                Metrics used to compare algorithms
                            </span>
                        </span>
                        <span className="accRight">
                            {openKey === "metrics" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "metrics" && (
                        <div className="accBody">
                            <div className="metricsGrid">
                                <div className="metricCard">
                                    <div className="metricHead">
                                        <FiClock />
                                        <span>Waiting time</span>
                                    </div>
                                    <p className="p">
                                        How long a process waits in the ready
                                        queue before it gets CPU.
                                    </p>
                                    <div className="monoLine">
                                        waiting = startTime - arrivalTime
                                    </div>
                                </div>

                                <div className="metricCard">
                                    <div className="metricHead">
                                        <FiClock />
                                        <span>Turnaround time</span>
                                    </div>
                                    <p className="p">
                                        Total time from arrival to completion.
                                        Includes waiting and running.
                                    </p>
                                    <div className="monoLine">
                                        turnaround = finishTime - arrivalTime
                                    </div>
                                </div>

                                <div className="metricCard">
                                    <div className="metricHead">
                                        <FiRepeat />
                                        <span>Response time</span>
                                    </div>
                                    <p className="p">
                                        Time until the first CPU response.
                                        Important for interactive systems.
                                    </p>
                                    <div className="monoLine">
                                        response = firstRunTime - arrivalTime
                                    </div>
                                </div>

                                <div className="metricCard">
                                    <div className="metricHead">
                                        <FiTrendingUp />
                                        <span>Throughput</span>
                                    </div>
                                    <p className="p">
                                        How many processes complete per unit
                                        time. Higher is usually better.
                                    </p>
                                    <div className="monoLine">
                                        throughput = completed / time
                                    </div>
                                </div>
                            </div>

                            <div className="miniNote">
                                <div className="miniTitle">
                                    Beginner mental shortcut
                                </div>
                                <p className="p">
                                    If the system feels laggy, focus on response
                                    time and waiting time. If batch jobs are
                                    slow, focus on throughput and turnaround
                                    time.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("algos")}
                        aria-expanded={openKey === "algos"}
                    >
                        <span className="accLeft">
                            <span className="accIcon">
                                <FiList />
                            </span>
                            <span className="accTitle">Core algorithms</span>
                        </span>
                        <span className="accRight">
                            {openKey === "algos" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "algos" && (
                        <div className="accBody">
                            <div className="algoStack">
                                <div className="algoCard">
                                    <div className="algoTitle">
                                        FCFS - First Come First Serve
                                    </div>
                                    <p className="p">
                                        Processes run in the order they arrive.
                                        Simple queue behavior.
                                    </p>
                                    <ul className="list">
                                        <li>Pros - very simple</li>
                                        <li>
                                            Cons - can cause convoy effect where
                                            a long job makes everyone wait
                                        </li>
                                    </ul>
                                </div>

                                <div className="algoCard">
                                    <div className="algoTitle">
                                        SJF - Shortest Job First
                                    </div>
                                    <p className="p">
                                        Runs the shortest CPU burst first. This
                                        reduces average waiting time.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Pros - great average waiting time
                                        </li>
                                        <li>
                                            Cons - long jobs may starve if short
                                            jobs keep coming
                                        </li>
                                    </ul>
                                </div>

                                <div className="algoCard">
                                    <div className="algoTitle">
                                        Round Robin - time slicing
                                    </div>
                                    <p className="p">
                                        Each process gets a fixed time quantum.
                                        If it does not finish, it goes back to
                                        the end of the queue.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Pros - very good for interactive
                                            systems
                                        </li>
                                        <li>
                                            Cons - too small quantum causes too
                                            many context switches
                                        </li>
                                    </ul>
                                    <div className="monoLine">
                                        Typical idea - 10ms to 50ms time slice
                                    </div>
                                </div>

                                <div className="algoCard">
                                    <div className="algoTitle">
                                        Priority scheduling
                                    </div>
                                    <p className="p">
                                        Higher priority runs first. Priority can
                                        be fixed or dynamic.
                                    </p>
                                    <ul className="list">
                                        <li>Pros - supports important tasks</li>
                                        <li>
                                            Cons - starvation possible for low
                                            priority jobs
                                        </li>
                                    </ul>
                                    <div className="miniNote">
                                        <div className="miniTitle">
                                            Starvation fix
                                        </div>
                                        <p className="p">
                                            Aging - gradually increase the
                                            priority of waiting processes.
                                        </p>
                                    </div>
                                </div>

                                <div className="algoCard">
                                    <div className="algoTitle">
                                        Multilevel queue
                                    </div>
                                    <p className="p">
                                        Ready queue is split into multiple
                                        queues, based on type of work, like
                                        system, interactive, batch. Each queue
                                        can have its own algorithm.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            Example - interactive queue uses
                                            Round Robin, batch queue uses FCFS
                                        </li>
                                        <li>
                                            Tradeoff - strict separation can be
                                            unfair if one queue always dominates
                                        </li>
                                    </ul>
                                    <div className="monoBlock">
                                        Queue 1 - system - priority high
                                        {"\n"}
                                        Queue 2 - interactive - Round Robin
                                        {"\n"}
                                        Queue 3 - batch - FCFS
                                    </div>
                                </div>
                            </div>

                            <div className="callout">
                                <FiStar />
                                <span>
                                    In real systems, scheduling is usually a
                                    mix, not a single pure algorithm.
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="accItem">
                    <button
                        type="button"
                        className="accBtn"
                        onClick={() => toggle("table")}
                        aria-expanded={openKey === "table"}
                    >
                        <span className="accLeft">
                            <span className="accIcon">
                                <FiLayers />
                            </span>
                            <span className="accTitle">
                                Sample table - waiting and turnaround quickly
                            </span>
                        </span>
                        <span className="accRight">
                            {openKey === "table" ? (
                                <FiChevronUp />
                            ) : (
                                <FiChevronDown />
                            )}
                        </span>
                    </button>

                    {openKey === "table" && (
                        <div className="accBody">
                            <p className="p">
                                Here is a small example with only burst times.
                                Assume all processes arrive at the same time.
                                This keeps the math fast for revision.
                            </p>

                            <div className="tableBlock">
                                <div className="tableTitle">
                                    Input processes
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Process</th>
                                            <th>Burst time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sampleProcesses.map((p) => (
                                            <tr key={p.id}>
                                                <td className="monoTd">
                                                    {p.id}
                                                </td>
                                                <td>{p.burst}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="twoTables">
                                <div className="tableBlock">
                                    <div className="tableTitle">
                                        FCFS result
                                    </div>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Process</th>
                                                <th>Burst</th>
                                                <th>Waiting</th>
                                                <th>Turnaround</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {fcfsRows.map((r) => (
                                                <tr key={r.id}>
                                                    <td className="monoTd">
                                                        {r.id}
                                                    </td>
                                                    <td>{r.burst}</td>
                                                    <td>{r.waiting}</td>
                                                    <td>{r.turnaround}</td>
                                                </tr>
                                            ))}
                                            <tr className="avgRow">
                                                <td colSpan={2}>Average</td>
                                                <td>
                                                    {avg(fcfsRows, "waiting")}
                                                </td>
                                                <td>
                                                    {avg(
                                                        fcfsRows,
                                                        "turnaround",
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="miniNote">
                                        <div className="miniTitle">
                                            FCFS order
                                        </div>
                                        <div className="monoBlock">
                                            P1 - P2 - P3 - P4
                                        </div>
                                    </div>
                                </div>

                                <div className="tableBlock">
                                    <div className="tableTitle">
                                        SJF result (non-preemptive)
                                    </div>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Process</th>
                                                <th>Burst</th>
                                                <th>Waiting</th>
                                                <th>Turnaround</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sjfRows.map((r) => (
                                                <tr key={r.id}>
                                                    <td className="monoTd">
                                                        {r.id}
                                                    </td>
                                                    <td>{r.burst}</td>
                                                    <td>{r.waiting}</td>
                                                    <td>{r.turnaround}</td>
                                                </tr>
                                            ))}
                                            <tr className="avgRow">
                                                <td colSpan={2}>Average</td>
                                                <td>
                                                    {avg(sjfRows, "waiting")}
                                                </td>
                                                <td>
                                                    {avg(sjfRows, "turnaround")}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="miniNote">
                                        <div className="miniTitle">
                                            SJF order
                                        </div>
                                        <div className="monoBlock">
                                            P2 - P4 - P1 - P3
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="callout">
                                <FiCpu />
                                <span>
                                    SJF usually reduces average waiting time,
                                    but it can starve long jobs in some
                                    scenarios.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CpuScheduling;
