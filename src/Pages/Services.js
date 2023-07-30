import Card from "./Card";





function Services() {
  return (
   
    <>       <div style={{marginTop:'5rem',width:'100%',height:'10px'}} className="about-scroll"></div>

    <div className="containerservices">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="rowservices">
                    <div className="col-md-4 mb-2">
                        <Card title="Samosa" img="samosa.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="VadaPav" img="vadapav.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="PaniPuri" img="panipuri.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default Services;
