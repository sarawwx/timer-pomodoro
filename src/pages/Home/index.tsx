import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { CountdownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";

export function Home() {
    const { register, handleSubmit, watch } = useForm()

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task')

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">i'll start in</label>
                    <TaskInput 
                        id="task" 
                        list="task-suggestions"
                        placeholder="give a name to your project" 
                        {...register('task')}
                    />


                    <datalist id="task-suggestions">
                        <option value="Project 1" />
                        <option value="Project 2" />
                        <option value="Project 3" />
                    </datalist>

                    <label htmlFor="minutesAmount">during</label>
                    <MinuteAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', {valueAsNumber: true})}
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

                <StartCountDownButton disabled={!task} type="submit">
                    <Play size={24} />
                    Start
                </StartCountDownButton>
            
            </form>
        </HomeContainer>
    )
}