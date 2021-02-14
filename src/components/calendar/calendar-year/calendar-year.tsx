import { Component, Prop, Event, EventEmitter, Method, h } from '@stencil/core';
import { calendarComponentInterface } from "../../../interface"
import { getRenderYear } from "../utils"

@Component({
    tag: 'cy-calendar-year',
    styleUrl: 'calendar-year.scss'
})
export class CalendarYear implements calendarComponentInterface {

    @Prop() currentYear: number
    @Event() choose: EventEmitter

    @Method()
    async prevPage() {

    }

    @Method()
    async nextPage() {

    }

    handleClick(year: number) {
        this.choose.emit(year)
    }

    private isNow(day: number) {
        const dateNow = new Date()
        return day === dateNow.getUTCFullYear()
    }

    render() {
        const renderYears = getRenderYear(this.currentYear)
        return (
            <table>
                <tbody>
                    {renderYears.map((decade) =>
                        <tr>
                            {decade.map((year) =>
                                <td>
                                    <div
                                        onClick={() => { this.handleClick(year) }}
                                        class={{
                                            'item': true,
                                            'now': this.isNow(year),
                                            'obvious': Math.floor(year / 10) === Math.floor(this.currentYear / 10)
                                        }}>
                                        {year}
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