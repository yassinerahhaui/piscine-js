const getAcceleration = (obj) => {
    if ((obj.f / obj.m) === (obj.Δv / obj.Δt) && (obj.f / obj.m) === (obj.d *2 / obj.t * obj.t)) {
        return obj.f / obj.m
    }
    return "impossible"
}
// f / m = a
// a = Δv / Δt
// a = 