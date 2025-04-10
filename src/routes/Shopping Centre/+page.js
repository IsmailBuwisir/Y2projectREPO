// @ts-nocheck
import * as db from '$lib/data_access.js';

export async function load() {
	const shopping_centres = await db.get_all_shopping_centres();

	if (shopping_centres) {
		return {
			shopping_centres
		};
	}

	return {
		error: 'Could not fetch shopping centre data'
	};
}
