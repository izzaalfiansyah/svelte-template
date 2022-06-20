<script lang="ts">
	let name: string = 'Svelte Windi TS';
</script>

<div>
	<div class="card">
		<div class="text-center">
			<div class="flex justify-center">
				<div class="lg:w-1/2 w-full">
					<input type="text" bind:value={name} class="input" placeholder="Masukkan Nama">
				</div>
			</div>
			<div class="text-2xl">
				Hello {name}!
			</div>
		</div>
	</div>
	<div class="card">
		<div class="font-semibold mb-2">Button:</div>
		<button class="btn">Default</button>
		<button class="icon">+</button>
		<button class="btn" color="blue">Blue</button>
		<button class="icon" color="blue">+</button>
		<button class="btn" color="red">Red</button>
		<button class="icon" color="red">+</button>
	</div>
	<div class="card">
		<div class="mb-2 font-semibold">Input:</div>
		<div class="lg:w-1/2">
			<input type="text" placeholder="Masukkan Nama" class="input" required>
			<input type="number" placeholder="Masukkan Nomor Telepon" class="input">
			<select class="input">
				<option value="">Pilih Jenis Kelamin</option>
				<option value="L">Laki-laki</option>
				<option value="P">Perempuan</option>
			</select>
			<textarea rows="3" class="input" placeholder="Masukkan Alamat"></textarea>
		</div>
	</div>
	<div class="card">
		<div class="mb-2 font-semibold">Table:</div>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th>No</th>
						<th>Nama</th>
						<th>Nomor Telepon</th>
						<th>Jenis Kelamin</th>
						<th>Alamat</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Muhammad Izza Alfiansyah</td>
						<td>081234567890</td>
						<td>Laki-laki</td>
						<td>Jl. Raya</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Mohammad Rafly Azzuhri</td>
						<td>081234567890</td>
						<td>Laki-laki</td>
						<td>Jl. Raya</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Ricky Ahmad Mahbubi</td>
						<td>081234567890</td>
						<td>Laki-laki</td>
						<td>Jl. Raya</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Amelia Ayu Safitri</td>
						<td>081234567890</td>
						<td>Perempuan</td>
						<td>Jl. Raya</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="card">
		<div class="mb-2 font-semibold">Skeleton:</div>
		<div class="flex flex-wrap">
			<div class="lg:w-1/2 w-full lg:px-1">
				<div class="card">
					<div class="rounded-full h-20 w-20 skeleton"></div>
					<div class="mt-3">
						<div class="skeleton h-2 rounded-full mb-2"></div>
						<div class="skeleton h-2 rounded-full mb-2"></div>
						<div class="skeleton h-2 rounded-full mb-2"></div>
					</div>
				</div>
			</div>
			<div class="lg:w-1/2 w-full lg:px-1">
				<div class="card">
					<div class="rounded-full h-20 w-20 skeleton"></div>
					<div class="mt-3">
						<div class="skeleton h-2 rounded-full mb-2"></div>
						<div class="skeleton h-2 rounded-full mb-2"></div>
						<div class="skeleton h-2 rounded-full mb-2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
