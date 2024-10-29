

function Cards({datos}) {
  
  return (
    <div>
      <div className="card">
            <div className="card__body">
              <q className="phrase">{datos.phrase}</q> <br />
              <cite className="author">- <b>{datos.author}</b></cite>
            </div>
          </div>
    </div>
  )
}

export default Cards