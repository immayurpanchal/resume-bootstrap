import React from "react";

class Accordion extends React.Component {
  state = {
    open: false
  };

  toggleAccordion() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const Component = this.props.component;

    return (
      <div className="mt-2">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <button
              className="btn btn-primary btn-block"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={this.toggleAccordion.bind(this)}
            >
              {this.props.title}
            </button>

            <div
              id="collapseOne"
              className={`collapse ${this.state.open ? "show" : ""}`}
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
