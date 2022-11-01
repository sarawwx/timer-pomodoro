import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">i'll start in</label>
                    <TaskInput 
                        id="task" 
                        placeholder="give a name to your project" 
                    />

                    <label htmlFor="minutesAmount">during</label>
                    <MinuteAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                    />

                    <span>minutes</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountDownButton disabled type="submit">
                    <Play size={24} />
                    Start
                </StartCountDownButton>
            
            </form>
        </HomeContainer>
    )
}