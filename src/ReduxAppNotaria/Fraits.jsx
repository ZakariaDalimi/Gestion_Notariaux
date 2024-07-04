import { useDispatch, useSelector } from "react-redux";
import { addtolist, viderlist } from "./reducers/actions/action";
import { useState } from "react";
import ListSumilation from "./ListSumilation";

const Fraits = ()=>{

    const [block , setBlock] = useState(false);

    const [id, setId] = useState(1);

    const priceState = useSelector(state => state.price)

    const dispatch = useDispatch();

    let HonoraireState = '';
    if (priceState < 300000) {
        HonoraireState = '4000,00 DH';
    } else if (priceState >= 300000 && priceState <= 1000000) {
        HonoraireState = 'Honoraires du notaire (1,5% de prix de vente dans ce cas): ' + (priceState * 0.015).toFixed(2) + ' DH';
    } else if (priceState > 1000000 && priceState <= 5000000) {
        HonoraireState = 'Honoraires du notaire (1,25% de prix de vente dans ce cas): ' + (priceState * 0.0125).toFixed(2) + ' DH';
    } else if (priceState > 5000000 && priceState <= 10000000) {
        HonoraireState = 'Honoraires du notaire (0,75% de prix de vente dans ce cas): ' + (priceState * 0.0075).toFixed(2) + ' DH';
    } else {
        HonoraireState = 'Honoraires du notaire (0,5% de prix de vente dans ce cas): ' + (priceState * 0.005).toFixed(2) + ' DH';
    }

    const totalDroitEnregistrement = (priceState * 0.04).toFixed(2);
    const totalConservationFonciere = (priceState * 0.015 + 200).toFixed(2);
    const totalTVA = (priceState * 0.1).toFixed(2);
    const total = (parseFloat(totalDroitEnregistrement) + parseFloat(totalConservationFonciere) + 1500 + parseFloat(totalTVA) + parseFloat(priceState * 0.04)).toFixed(2);

    function currentDate() {
        return new Date().toISOString().slice(0, 10);
    }

    const date = currentDate()
    

    const toList = { id : id , droits : totalDroitEnregistrement , conservation : totalConservationFonciere , date : date , totaliter : total}

    const handleAjouter = (e)=>{
        e.preventDefault()
        dispatch(addtolist(toList))
        setBlock(true)
        setId(id + 1)
    }

    const handleVider = ()=>{
        dispatch(viderlist())
    }

    return <>
       <div className="container mt-4">
            <h3 className="mb-3">Prix de vente : {priceState} DH</h3>
            <ul className="list-group mb-3">
                <li className="list-group-item">Droit d'enregistrement (4% de prix de vente) : {totalDroitEnregistrement} DH</li>
                <li className="list-group-item">Conservation foncière (1,5% du prix de vente + 200 DH) : {totalConservationFonciere} DH</li>
                <li className="list-group-item">Frais de dossier (timbres, copies...) : 1500,00 DH</li>
                <li className="list-group-item">{HonoraireState}</li>
                <li className="list-group-item">TVA sur les honoraires du notaire (10%) : {totalTVA} DH</li>
                <li className="list-group-item">Total : {total} DH</li>
            </ul>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={handleAjouter}>Ajouter To List</button>
                <button className="btn btn-secondary" onClick={handleVider}>Vider</button>
            </div>
        </div>
        {
            block && (
                <ListSumilation />
            )
        }
    </>
}

export default Fraits;