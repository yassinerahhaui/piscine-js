const getAcceleration = (obj) => {
    if ((obj.f / obj.m) === (obj.Δv / obj.Δt)) {
        return obj.f / obj.m
    }
    return "impossible"
}
// f / m = a
// a = Δv / Δt
// a = 