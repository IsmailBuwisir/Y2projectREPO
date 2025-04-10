<script>
    // @ts-nocheck

    import { format_timestamp } from '$lib/utilities.js';

    export let data;

    const events = data.events;

    console.log(events);
</script>

<h2>Trolley Event Details</h2>

<h4>Trolley</h4>

<div class="table-responsive-md">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>id</th>
                <td>{events[0].trolley.id}</td>
            </tr>
            <tr>
                <th>trolley_id</th>
                <td>{events[0].trolley.trolley_id}</td>
            </tr>
            <tr>
                <th>status</th>
                <td>{events[0].trolley.status}</td>
            </tr>
            <tr>
                <th>location</th>
                <td>{events[0].trolley.location}</td>
            </tr>
            <tr>
                <th>created</th>
                <td>{format_timestamp(events[0].trolley.timestamp)}</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>Event</h4>
<div class="table-responsive-md">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>id</th>
                <td>{events[0].id}</td>
            </tr>
            <tr>
                <th>timestamp</th>
                <td>{format_timestamp(events[0].timestamp)}</td>
            </tr>
            <tr>
                <th>status</th>
                <td>{events[0].status}</td>
            </tr>
            <tr>
                <th>trolley_size</th>
                <td>{events[0].trolley_size}</td>
            </tr>
            <tr>
                <th>location</th>
                <td>{events[0].location}</td>
            </tr>
            <tr>
                <th>Reported By</th>
                <td>{events[0].reported_by}</td>
            </tr>
        </tbody>
    </table>
</div>
