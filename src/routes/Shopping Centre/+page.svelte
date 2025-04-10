<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import * as db from '$lib/data_access.js';
	import { writable } from 'svelte/store';

	export let data;
	let shopping_centres = data.shopping_centres;

	let filtered_centres = writable([...data.shopping_centres]);

	// Filter function
	async function filterByCentre(id = '') {
		if (id) {
			const result = await db.get_shopping_centre_by_id(id);
			$filtered_centres = result;
		} else {
			const all = await db.get_all_shopping_centres();
			$filtered_centres = all;
		}
	}
</script>

<div class="container">
	<div class="row">
		<h2 class="mt-5">Shopping Centre Overview</h2>
	</div>

	<div class="row">
		<div class="col-sm-2">
			<!-- Filter Menu -->
			<div id="shopping_centres" class="list-group">
                <button on:click={() => filterByCentre('')} class="list-group-item list-group-item-action">All Centres</button>
				{#each shopping_centres as centre}
					<button
						on:click={() => filterByCentre(centre.id)}
						class="list-group-item list-group-item-action">
						{centre.Retail_name}
					</button>
				{/each}
			</div>
		</div>

		<div class="col-sm-10">
			<!-- Table -->
			<div id="centre-info">
				<table class="table table-striped table-bordered table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Retail Name</th>
							<th>Location</th>
							<th>Manager</th>
							<th>Contact</th>
							<th>Total Trolleys</th>
							<th>Out of Service</th>
							<th>Most Used</th>
							<th>Reported Stolen</th>
						</tr>
					</thead>
					<tbody>
						{#each $filtered_centres as centre}
							<tr>
								<td>{centre.id}</td>
								<td>{centre.Retail_name}</td>
								<td>{centre.Location}</td>
								<td>{centre.Manager_name}</td>
								<td>{centre.Manager_contact}</td>
								<td>{centre.Total_Trolleys}</td>
								<td>{centre.Out_of_service}</td>
								<td>{centre.Most_used_type}</td>
								<td>{centre.reported_stolen}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
