const rates = {
   EU: { standard: 5, express: 10 },
   UK: { standard: 6, express: 12 },
   US: { standard: 7, express: 14 },
   CN: { standard: 8, express: 16 },
};
const remoteSurcharge = {
   EU: 0,
   UK: 2,
   US: 3,
   CN: 4,
};

const svars=document.getElementById("svars");
const rate=document.getElementById("rate");
const surcharge=document.getElementById("surcharge");
const save=document.getElementById("saveBt");
const result=document.getElementById("result");

save.addEventListener("click", ()=>{
    const svar =Number(svars.value);
    const ratet= rate.value;
    const surcharget= surcharge.value;
    math= svar*rates[surcharget][ratet]+remoteSurcharge[surcharget] ;
    let finalMath = Number(math.toFixed(2));
    result.textContent=`Piegāde uz ${surcharget} (${ratet}): ${finalMath} EUR`;
})