import "./ConfigSection.css"

export default function ConfigSection({heading, description, children, detail}){
  return (
    <section className="ConfigSection">
      <div>
        <h2>{heading}</h2>
        {description &&
          <p>{description}</p>
        }
      </div>
      {detail}
    </section>
  )
}
