import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Container } from "./styles";

const date = new Date();
const currentDay = date.getDate();
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const horarios = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export function Calendar(){
    const [calendar, setCalendar] = useState([]);
    const [selectedDay, setSelectedDay] = useState();

    function getDays(){
        let array = [];

        for(let i = 1; i <= lastDay; i++){
            array.push(i);
        }

        setCalendar(array);
    }

    //gera o array com o numero de dias no mês
    useEffect(() => {
        getDays();
    }, []);

    function handleSetSelectedDay(day: Number){
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
                <select>
                    {horarios.map((horario) => (
                        <option key={horario} value={horario}>{horario}</option>
                    ))} 
                </select>
            </div>
            <Button />
        </Container>
    );
}