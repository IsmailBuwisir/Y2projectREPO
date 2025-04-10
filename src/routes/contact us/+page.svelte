<h1>Contact us</h1>
<script>
	let name = '', email = '', message = '', sent = false;

	function handleSubmit(event) {
		event.preventDefault();
		if (!name || !email || !message) return alert('Please fill all fields.');
		sent = true;
		setTimeout(() => {
			alert('Thank you for contacting us! We will get back to you soon.');
			sent = false;
			name = email = message = '';
		}, 1500);
	}
</script>

<div class="container py-5">
	<h1 class="mb-4">Contact Us</h1>
	<div class="row">
		<div class="col-md-7">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-3">
					<label>Name</label>
					<input type="text" bind:value={name} class="form-control" required>
				</div>
				<div class="mb-3">
					<label>Email</label>
					<input type="email" bind:value={email} class="form-control" required>
				</div>
				<div class="mb-3">
					<label>Message</label>
					<textarea rows="5" bind:value={message} class="form-control" required></textarea>
				</div>
				<button class="btn btn-dark" disabled={sent}>{sent ? 'Sending...' : 'Send Message'}</button>
			</form>
		</div>

		<div class="col-md-5">
			<div class="p-4 bg-dark text-white rounded">
				<h5>Contact Information</h5>
				<p>📍 123 Main Street, Dublin</p>
				<p>📞 +353 01 234 5678</p>
				<p>✉️ support@example.com</p>
			</div>
		</div>
	</div>
</div>
