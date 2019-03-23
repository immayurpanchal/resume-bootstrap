import React from 'react';

const Topbar = () => (
    <div>
        <nav className="navbar navbar-light bg-primary">
        <span className="navbar-brand text-light">Resume</span>
        <div>
            <button className="btn btn-light mr-3">Save</button>
            <button className="btn btn-light mr-3">Download PDF</button>
        </div>
        </nav>
    </div>
);

export default Topbar;