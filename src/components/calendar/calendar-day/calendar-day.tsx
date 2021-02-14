import { Component, Prop, Event, EventEmitter, h, Method } from '@stencil/core';
import { calendarComponentInterface } from "../../../interface"
import { getRenderDay } from "../utils"

@Component({
    tag: 'cy-calendar-day',
    styleUrl: 'calendar-day.scss'
})
export class CalendarMouth implements calendarComponentInterface {
    @Prop() currentYear: number
    @Prop() currentMonth: number
    @Event() choose: EventEmitter
    activateEl: HTMLElement


    @Method()
    async prevPage() {

    }

    @Method()
    async nextPage() {

    }

    private isNow(day: number[]) {
        const dateNow = new Date()
        return day[0] === dateNow.getUTCFullYear() &&
            day[1] === dateNow.getMonth() + 1 &&
            day[2] === dateNow.getDate()
    }

    handleClick(e: any, day: number[]) {
        let targetEl = e.target.closest('.item')
        if (!targetEl) {
            return
        }
        if (this.activateEl) {
            this.activateEl.classList.remove('choosed')
        }
        this.activateEl = targetEl
        this.activateEl.classList.add('choosed')
        this.choose.emit([...day])
    }

    render() {
        const renderDays = getRenderDay(this.currentYear, this.currentMonth)
        return (
            <table>
                <thead>
                    <tr>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                        <th>日</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDays.map((week) =>
                        <tr>
                            {week.map((day) =>
                                <td>
                                    <div
                                        onClick={(e) => { this.handleClick(e, day) }}
                                        class={{
                                            'item': true,
                                            'obvious': day[1] === this.currentMonth,
                                            'now': this.isNow(day)
                                        }}>
                                        {day[2]}
                                    </div>
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>

        );
    }
}