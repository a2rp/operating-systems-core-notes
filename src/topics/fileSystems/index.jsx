// src/topics/fileSystems/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiFolder,
    FiFileText,
    FiInfo,
    FiLock,
    FiDatabase,
    FiTrash2,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

const FileSystems = () => {
    const [openKey, setOpenKey] = useState("overview");

    const items = useMemo(() => {
        return [
            {
                key: "overview",
                title: "File systems - what they solve",
                icon: <FiDatabase />,
                body: (
                    <>
                        <p className="p">
                            A file system is the OS method to store data on
                            storage devices in an organized and reliable way. It
                            gives you a simple view like folders and files, but
                            internally it manages blocks, metadata, and
                            permissions.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">At a glance</div>
                            <div className="monoBlock">
                                File system = names + directories + metadata +
                                storage blocks
                            </div>
                        </div>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">What you see</div>
                                <ul className="list">
                                    <li>Folders and files with names</li>
                                    <li>Copy, move, rename, delete</li>
                                    <li>Permissions and ownership</li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="colTitle">What OS manages</div>
                                <ul className="list">
                                    <li>Where bytes are stored on disk</li>
                                    <li>Which blocks belong to which file</li>
                                    <li>Consistency and crash safety</li>
                                </ul>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                key: "file-vs-dir",
                title: "File vs directory",
                icon: <FiFolder />,
                body: (
                    <>
                        <p className="p">
                            A file is a sequence of bytes. A directory is a
                            special structure that maps names to file entries.
                            The directory helps the OS find a file when you
                            provide a path.
                        </p>

                        <div className="stack">
                            <div className="stackCard">
                                <div className="stackTitle">
                                    <span className="rowIcon">
                                        <FiFileText />
                                    </span>
                                    File
                                </div>
                                <ul className="list">
                                    <li>Stores actual data bytes</li>
                                    <li>
                                        Has metadata like size and permissions
                                    </li>
                                    <li>
                                        Can be text, image, video, executable,
                                        anything
                                    </li>
                                </ul>
                            </div>

                            <div className="stackCard">
                                <div className="stackTitle">
                                    <span className="rowIcon">
                                        <FiFolder />
                                    </span>
                                    Directory
                                </div>
                                <ul className="list">
                                    <li>Stores name to entry mappings</li>
                                    <li>
                                        Helps resolve a path like /a/b/c.txt
                                    </li>
                                    <li>
                                        Each entry points to a file record (like
                                        an inode)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Simple analogy</div>
                            <p className="p">
                                A directory is like an index page. It helps
                                locate the real content. The file is the real
                                content.
                            </p>
                        </div>
                    </>
                ),
            },
            {
                key: "metadata",
                title: "Metadata - data about the file",
                icon: <FiInfo />,
                body: (
                    <>
                        <p className="p">
                            Metadata is information about a file, not the file
                            data itself. OS uses metadata for access control,
                            storage mapping, and showing file details.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">Common metadata</div>
                            <ul className="list">
                                <li>Name (often stored in directory entry)</li>
                                <li>Size in bytes</li>
                                <li>Owner and group</li>
                                <li>Permissions</li>
                                <li>Created and modified times</li>
                                <li>Location pointers to disk blocks</li>
                            </ul>
                        </div>

                        <div className="monoBlock">
                            Example
                            {"\n"}
                            "report.pdf" has size, owner, permissions,
                            timestamps, and pointers to disk blocks
                        </div>
                    </>
                ),
            },
            {
                key: "permissions",
                title: "Permissions - rwx in simple terms",
                icon: <FiLock />,
                body: (
                    <>
                        <p className="p">
                            Permissions decide who can read, write, or execute a
                            file. A common model is rwx for three groups: owner,
                            group, and others.
                        </p>

                        <div className="permGrid">
                            <div className="permCard">
                                <div className="permTitle">r - read</div>
                                <p className="p">
                                    Can view file content or list directory
                                    items.
                                </p>
                            </div>

                            <div className="permCard">
                                <div className="permTitle">w - write</div>
                                <p className="p">
                                    Can modify file content or create and delete
                                    items in a directory.
                                </p>
                            </div>

                            <div className="permCard">
                                <div className="permTitle">x - execute</div>
                                <p className="p">
                                    Can run a program file. For directories, x
                                    often means you can enter and access inside.
                                </p>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Example pattern</div>
                            <div className="monoBlock">
                                rwx rw- r--
                                {"\n"}
                                owner can read write execute
                                {"\n"}
                                group can read write
                                {"\n"}
                                others can read
                            </div>
                        </div>

                        <div className="callout">
                            <FiInfo />
                            <span>
                                Directory permissions behave slightly
                                differently. Read means list names. Execute
                                means you can enter.
                            </span>
                        </div>
                    </>
                ),
            },
            {
                key: "inode",
                title: "Inode idea - simple and practical",
                icon: <FiDatabase />,
                body: (
                    <>
                        <p className="p">
                            Many file systems keep a separate record for each
                            file that contains metadata and pointers to where
                            data is stored. A common name for this record is an
                            inode.
                        </p>

                        <div className="twoCol">
                            <div className="col">
                                <div className="colTitle">Directory stores</div>
                                <ul className="list">
                                    <li>File name</li>
                                    <li>Pointer or number to locate inode</li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="colTitle">Inode stores</div>
                                <ul className="list">
                                    <li>Permissions and ownership</li>
                                    <li>File size</li>
                                    <li>Timestamps</li>
                                    <li>Pointers to data blocks</li>
                                </ul>
                            </div>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">
                                Why this design helps
                            </div>
                            <p className="p">
                                It separates names from file content. You can
                                have multiple names pointing to same inode using
                                links.
                            </p>
                        </div>

                        <div className="monoBlock">
                            Path lookup idea
                            {"\n"}
                            "/docs/report.pdf"
                            {"\n"}
                            docs directory maps "report.pdf" - inode number
                            {"\n"}
                            inode maps - data blocks on disk
                        </div>
                    </>
                ),
            },
            {
                key: "delete",
                title: "Why delete is not always instant",
                icon: <FiTrash2 />,
                body: (
                    <>
                        <p className="p">
                            When you delete a file, OS often does not
                            immediately wipe all file bytes from disk. Many file
                            systems mark the file entry as removed and free the
                            blocks for reuse.
                        </p>

                        <div className="miniNote">
                            <div className="miniTitle">
                                What usually happens
                            </div>
                            <ul className="list">
                                <li>Directory entry is removed</li>
                                <li>Inode link count is reduced</li>
                                <li>
                                    Data blocks are marked as free for future
                                    files
                                </li>
                                <li>
                                    Actual bytes may remain until overwritten
                                </li>
                            </ul>
                        </div>

                        <div className="callout">
                            <FiInfo />
                            <span>
                                This is why recovery tools sometimes bring back
                                deleted files if blocks were not overwritten
                                yet.
                            </span>
                        </div>

                        <div className="miniNote">
                            <div className="miniTitle">Special case</div>
                            <p className="p">
                                If a running program still has the file open, OS
                                may keep the file data until the program closes
                                it. The name disappears, but the storage is
                                released later.
                            </p>
                        </div>

                        <div className="monoBlock">
                            Simple story
                            {"\n"}
                            App opens file
                            {"\n"}
                            You delete file name
                            {"\n"}
                            App still reads it because it is still open
                            {"\n"}
                            Data is finally freed when app closes it
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
        <Styled.Wrapper id="file-systems">
            <div className="top">
                <h2 className="title">File Systems</h2>
                <p className="sub">
                    Files and directories look simple, but the OS is managing
                    metadata, permissions, and disk blocks behind the scenes.
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

export default FileSystems;
