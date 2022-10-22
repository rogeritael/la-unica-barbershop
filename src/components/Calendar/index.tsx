import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Container } from "./styles";


export function Calendar(){
    const [calendar, setCalendar] = useState([]);
    const [hour, setHour] = useState("08:00");
    const date = new Date();
    const currentDay = date.getDate();
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const horarios = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    //mensagem personalizada 
    const message = `https://api.whatsapp.com/send?phone=5547992440796&text=Olá,%20tem%20horário%20disponivel%20para%20o%20dia%20${selectedDay}%20às%20${hour}%20horas?%20`;

    function getDays(){
        let days: any = [];

        for(let i = 1; i <= lastDay; i++){
            days.push(i);
        }

        setCalendar(days);
    }

    //gera o array com o numero de dias no mês
    useEffect(() => {
        getDays();
    });

    function handleSetSelectedDay(day: any){
        if(day >= currentDay){
            setSelectedDay(day);
        }
    }


    return(
        <Container data-aos="fade-up">
            <div className="calendar-container">
                {
                    calendar.map((day) => (
                        <div
                            key=""
                            className={day < currentDay ? "dayCard disabled" : day == selectedDay ? "dayCard active" : "dayCard"}
                            onClick={() => handleSetSelectedDay(day)}
                        >
                            {day} 
                        </div>
                    ))
                }
                <select onChange={(e) => setHour(e.target.value)}>
                    {horarios.map((horario) => (
                        <option key={horario} value={horario}>{horario}</option>
                    ))} 
                </select>
            </div>
            <Button text="Verificar disponibilidade" link={message}/>
        </Container>
    );
}