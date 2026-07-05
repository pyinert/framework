<script>export let users = [];</script><main><h1>Users</h1><ul>{#each users as user}<li><a href={`/users/${user.id}`}>{user.name}</a></li>{/each}</ul></main>
